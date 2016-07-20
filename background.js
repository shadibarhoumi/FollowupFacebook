var sidebarOpen = false;

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDPG9fbzcZtiBsp-jTlvOXMlUl3hWiEIj8',
  authDomain: 'followup-f5c37.firebaseapp.com',
  databaseURL: 'https://followup-f5c37.firebaseio.com',
  storageBucket: 'followup-f5c37.appspot.com',
};
firebase.initializeApp(config);

console.log('Firebase');
console.log(firebase);

// Get a reference to the database service
var database = firebase.database();

// data write methods
function addToFollowup(fbUsername, fbContact) {
  firebase.database().ref('users/' + fbUsername + '/contactsToFollowup').push(fbContact);
}

// listen for ADD_CONTACT message
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === 'ADD_CONTACT') {
      console.log('got request!');
      console.log(request);

      addToFollowup(request.fbUsername, request.fbContact);

      sendResponse({ statusMessage: 'Tried our best!' });
    }
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
