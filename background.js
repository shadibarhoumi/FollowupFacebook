var sidebarOpen = false;

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDPG9fbzcZtiBsp-jTlvOXMlUl3hWiEIj8',
  authDomain: 'followup-f5c37.firebaseapp.com',
  databaseURL: 'https://followup-f5c37.firebaseio.com',
  storageBucket: 'followup-f5c37.appspot.com',
};

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

// track whether contact listener has been registered
var listenerRegistered = false;

// data write methods
function addToFollowup(fbUsername, contact) {
  firebase.database().ref('users/' + fbUsername + '/contactsToFollowup').push(contact);
}

function sendContactToView(contact) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { message: 'RECEIVED_CONTACT_FROM_DB', contact: contact });
  });
}

function removeFromFollowup(fbUsername, contactId) {
  firebase.database().ref('users/' + fbUsername + '/contactsToFollowup/' + contactId).remove(function (response) {
  });
}

// registering new contact listener
function registerContactListener(fbUsername, callback) {
  firebase.database().ref('users/' + fbUsername + '/contactsToFollowup').on('child_added', function (snapshot) {
    var contactWithId = Object.assign(snapshot.val(), { contactId: snapshot.key });
    sendContactToView(contactWithId);
  });
}

// get contacts once from firebase without registering any listeners
function fetchContactsOnce(fbUsername) {
  firebase.database().ref('users/' + fbUsername + '/contactsToFollowup').once('value', function (snapshot) {
    var contacts = snapshot.val();
    for (var key in contacts) {
      var contactWithId = Object.assign(contacts[key], { contactId: key });
      sendContactToView(contactWithId);
    }
  });
}

function doesContactExist(fbUsername, contactName, sendResponse) {
  var ref = firebase.database().ref('users/' + fbUsername + '/contactsToFollowup');
  // sendResponse = sendResponse.bind
  ref.orderByChild('contactName').equalTo(contactName).once('value', function (snapshot) {
    var matches = snapshot.val();
    console.log('matches for ' + contactName);
    console.log(matches);
    if (matches) {
      var contactId = Object.keys(matches)[0];
      sendResponse({ exists: true, contactId: contactId });
    } else {
      sendResponse({ exists: false })
    }
  });
}

// listen for ADD_CONTACT message
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === 'ADD_CONTACT_TO_DB') {
      addToFollowup(request.fbUsername, request.contact);
    } else if (request.message === 'FETCH_CONTACTS_FROM_DB') {
      // register listener if first time fetching contacts
      if (!listenerRegistered) {
        listenerRegistered = true;
        registerContactListener(request.fbUsername);
      } else { // just fetch contacts otherwise
        fetchContactsOnce(request.fbUsername);
      }
    } else if (request.message === 'REMOVE_CONTACT_FROM_DB') {
      removeFromFollowup(request.fbUsername, request.contactId);
    } else if (request.message === 'DOES_CONTACT_EXIST') {
      doesContactExist(request.fbUsername, request.contactName, sendResponse);
    }
    return true;
  });

// send OPEN_SIDEBAR or CLOSE_SIDEBAR message to content script when browser action icon is clicked
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (sidebarOpen) { // sidebar is open so close it
      chrome.tabs.sendMessage(tabs[0].id, { message: 'CLOSE_SIDEBAR' }, function (response) {}); // content script does not send response
      sidebarOpen = false;
    } else { // sidebar is closed so open it
      chrome.tabs.sendMessage(tabs[0].id, { message: 'OPEN_SIDEBAR' }, function (response) {}); // content script does not send response
      sidebarOpen = true;
    }
  });
});
