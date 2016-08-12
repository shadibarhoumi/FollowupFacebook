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

// data write methods
function addToFollowup(fbUsername, contact, sendResponse) {
  var contactRef = firebase.database().ref('users/' + fbUsername + '/contactsToFollowup').push(contact);
  sendResponse({ contactId: contactRef.key });
}

function sendContactToView(contact) {
  chrome.tabs.query({ active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { message: 'RECEIVED_CONTACT_FROM_DB', contact: contact });
  });
}

function removeFromFollowup(fbUsername, contactId) {
  firebase.database().ref('users/' + fbUsername + '/contactsToFollowup/' + contactId).remove(function (response) {
  });
}

// registering new contact listener
function registerContactListener(fbUsername, callback) {
  var ref = firebase.database().ref('users/' + fbUsername + '/contactsToFollowup').orderByChild('followupDate');
  ref.off('child_added'); // detach any previous listeners
  ref.on('child_added', function (snapshot) { // attach listener
    var contactWithId = Object.assign(snapshot.val(), { contactId: snapshot.key });
    sendContactToView(contactWithId);
  });
}

function doesContactExist(fbUsername, contactName, sendResponse) {
  var ref = firebase.database().ref('users/' + fbUsername + '/contactsToFollowup');
  // sendResponse = sendResponse.bind
  ref.orderByChild('contactName').equalTo(contactName).once('value', function (snapshot) {
    var matches = snapshot.val();
    if (matches) {
      var contactId = Object.keys(matches)[0];
      sendResponse({ exists: true, contactId: contactId });
    } else {
      sendResponse({ exists: false })
    }
  });
}

// checks whether there are followups due today
function checkFollowupsDue(fbUsername, sendResponse) {
  var ref = firebase.database().ref('users/' + fbUsername + '/contactsToFollowup');
  ref.orderByChild('followupDate').once('child_added', function(snapshot) {
    var contact = snapshot.val();

    var followUpDate = moment(contact.followupDate, 'x')
    var endOfToday = moment({hour: 23, minute: 59, seconds: 59, milliseconds: 999});
    var isDue = followUpDate.isBefore(endOfToday);

    if (isDue) {
      sendResponse({ followupsDue: true });
    }
  }); 
}

function updateContactDate(fbUsername, contactId, followupDate) {
  var ref = firebase.database().ref('users/' + fbUsername + '/contactsToFollowup/' + contactId);
  ref.update({ followupDate: followupDate });
}

// listen for ADD_CONTACT message
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === 'ADD_CONTACT_TO_DB') {
      addToFollowup(request.fbUsername, request.contact, sendResponse);
    } else if (request.message === 'FETCH_CONTACTS_FROM_DB') {
        registerContactListener(request.fbUsername);
    } else if (request.message === 'REMOVE_CONTACT_FROM_DB') {
      removeFromFollowup(request.fbUsername, request.contactId);
    } else if (request.message === 'DOES_CONTACT_EXIST') {
      doesContactExist(request.fbUsername, request.contactName, sendResponse);
    } else if (request.message === 'CHECK_FOLLOWUPS_DUE') {
      checkFollowupsDue(request.fbUsername, sendResponse);
    } else if (request.message === 'UPDATE_CONTACT_DATE_IN_DB') {
      updateContactDate(request.fbUsername, request.contactId, request.followupDate);
    }
    return true;
  });

// send TOGGLE_SIDEBAR message to content script when browser action icon is clicked
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { message: 'TOGGLE_SIDEBAR' });
  });
});
