$(function () {
  const ONE_DAY_MILLISECONDS = 86400000;

  // send ADD_CONTACT message w/ contact info to background script
  function followupWithContact(fbUsername, fbContact) {
    chrome.runtime.sendMessage({ message: 'ADD_CONTACT', fbUsername: fbUsername, fbContact: fbContact },
      function (response) {
        console.log(response.statusMessage);
      });
  }

  // shift facebook contents left to make room for sidebar
  function makeRoomForSidebar() {
    $('body').addClass('shiftBody');
    $('.fbChatSidebar').addClass('shiftFbChatSidebar');
    $('.fbDockWrapperRight').addClass('shiftFbDockWrapper');
  }

  function removeRoomForSidebar() {
    $('body').removeClass('shiftBody');
    $('.fbChatSidebar').removeClass('shiftFbChatSidebar');
    $('.fbDockWrapperRight').removeClass('shiftFbDockWrapper');
  }

  function openSidebar() {
    makeRoomForSidebar();
  }

  function closeSidebar() {
    removeRoomForSidebar();
  }

  // listen for OPEN_SIDEBAR message
  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      console.log('got message in content script');
      console.log(request);
      if (request.message === 'OPEN_SIDEBAR') {
        openSidebar();
      } else if (request.message === 'CLOSE_SIDEBAR') {
        closeSidebar();
      }
    });

  // extract fb profile URL from profile icon in blue bar
  var fbProfileURL = $('a[data-testid="blue_bar_profile_link"]').first().attr('href');

  // get the username after the '/' character in the profile url
  var fbUsername = fbProfileURL.split('/').pop();

  console.log('FB USERNAME: ' + fbUsername);

  var iconTemplateString = [
    '<span class="_3a61">',
    ' <a data-reactroot aria-label="Follow up with this conversation" class="nubFollowupIcon _3olv button" data-hover="tooltip" data-tooltip-alignv="top" data-tooltip-content="Follow up with this conversation" href="#">',
    ' </a>',
    '</span>',
  ].join('\n');

  // fetch all open facebook chat windows
  var $openedNubs = $('.fbNub.opened');
  $openedNubs.each(function (index) {
    var $nub = $(this);
    var fbContactName = $nub.find('.titlebarText')[0].firstChild.innerText;
    var $titlebar = $nub.find('.titlebarButtonWrapper').first();
    var $icon = $(iconTemplateString).prependTo($titlebar);
    var $iconLink = $icon.children('a').first();

    $iconLink.click(function (e) {
      e.preventDefault();
      var followupDate = Date.now() + ONE_DAY_MILLISECONDS * 2; // defaults to 2 days for now
      followupWithContact(fbUsername, { fbContactName: fbContactName, followupDate: followupDate });
    });
  });
});
