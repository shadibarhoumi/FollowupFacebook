$(function () {
  // extend jquery
  $.fn.exists = function () {
    return this.length !== 0;
  };

  const ONE_DAY_MILLISECONDS = 86400000;

  // followup icon to place in chat window
  const iconTemplateString = [
    '<span class="_3a61">',
    ' <a data-reactroot aria-label="Follow up with this conversation" class="nubFollowupIcon _3olv button" data-hover="tooltip" data-tooltip-alignv="top" data-tooltip-content="Follow up with this conversation" href="#">',
    ' </a>',
    '</span>',
  ].join('\n');

  const followupContactTemplateString = [
    '<li class="followupContactItem _42fz">',
       '<a class="followupContactLink _55ln" rel="ignore" href="#">',
          '<div class="_55lp">',
             '<div class="_55lq">',
                '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
             '</div>',
             '<div class="_5bon">',
               '<div class="_568z">',
                 '<div class="followupDate _568-"></div>',
              '</div>',
             '</div>',
             '<div class="followupContactName _55lr"></div>',
          '</div>',
       '</a>',
    '</li>',
  ].join('\n');

  // sidebar
  const sidebarTemplateString = [
    '<div class="followupSidebarContainer">',
      '<div class="_5qqe"></div>',
      '<div class="followupText _5qqe">Follow Up!</div>',
      '<div aria-label="Followup for Facebook" class="fbChatSidebarBody followupSidebar" role="complementary" style="height: 100%;">',
       '<h3 class="accessible_elem">Followup for Facebook</h3>',
       '<div class="uiScrollableArea scrollableOrderedList _5qmw fade contentAfter" style="width:252px;" id="u_0_2q">',
          '<div class="uiScrollableAreaWrap scrollable" aria-label="Scrollable region" role="group" tabindex="0">',
             '<div class="uiScrollableAreaBody" style="width:205px;">',
                '<div class="uiScrollableAreaContent">',
                   '<div data-ft="{&quot;tn&quot;:&quot;+]&quot;}" id="u_0_2r">',
                      '<div class="fbChatOrderedList clearfix">',
                         '<div>',
                            '<ul class="followupContactList">',
                            '</ul>',
                         '</div>',
                      '</div>',
                   '</div>',
                '</div>',
             '</div>',
          '</div>',
        '</div>',
      '</div>',
    '</div>',
  ].join('\n');

  // extract fb profile URL from profile icon in blue bar
  var fbProfileURL = $('a[data-testid="blue_bar_profile_link"]').first().attr('href');

  // get the username after the '/' character in the profile url
  var fbUsername = fbProfileURL.split('/').pop();

  // has the sidebar been loaded for the first time
  var sidebarLoaded = false;

  // fetch all open facebook chat windows and insert icon
  var $openedNubs = $('.fbNub.opened');
  $openedNubs.each(function (index) {
    var $nub = $(this);

    // if nub is actually an open nub
    if ($nub.find('.titlebarText').exists() && $nub.find('.titlebarButtonWrapper')) {
      $nub.addClass('followupButtonAdded');
      var fbContactName = $nub.find('.titlebarText')[0].firstChild.innerText;
      var $titlebar = $nub.find('.titlebarButtonWrapper').first();
      var $icon = $(iconTemplateString).prependTo($titlebar);
      var $iconLink = $icon.children('a').first();
    }
  });

  // listen for opened chat windows and add icon
  $('.fbNubGroup .fbNubGroup').on('DOMNodeInserted', function (e) {
    var $potentialNubs = $('.fbNub.opened');
    $potentialNubs.each(function (index) {
      var $nub = $(this);
      if (!$nub.hasClass('followupButtonAdded')) { // if it is a new nub
        $nub.addClass('followupButtonAdded');
        var $titlebar = $nub.find('.titlebarButtonWrapper').first();
        var $icon = $(iconTemplateString).prependTo($titlebar);
      }
    });
  });

  // handle clicks on follow up buttons
  $('.fbNubGroup .fbNubGroup').delegate('.nubFollowupIcon', 'click', function (e) {
    e.preventDefault();
    var $icon = $(this);
    var followupDate = Date.now() + ONE_DAY_MILLISECONDS * 2; // defaults to 2 days for now
    var fbContactName = $icon.parent().parent().parent().find('.titlebarText')[0].firstChild.innerText;
    addContactToDB(fbUsername, { fbContactName: fbContactName, followupDate: followupDate });
  });

  // send ADD_CONTACT message w/ contact info to background script
  function addContactToDB(fbUsername, fbContact) {
    chrome.runtime.sendMessage({ message: 'ADD_CONTACT_TO_DB', fbUsername: fbUsername, fbContact: fbContact });
  }

  // send REMOVE_CONTACT message w/ contact info to background script
  function removeContactFromDB(contactId) {
    chrome.runtime.sendMessage({ message: 'REMOVE_CONTACT_FROM_DB', fbUsername: fbUsername, contactId: contactId });
  }

  // *** SIDEBAR ***
  // shift facebook contents left to make room for sidebar
  function makeRoomForSidebar() {
    $('body').addClass('shiftBody');
    $('.fbChatSidebar').addClass('shiftFbChatSidebar');
    $('.fbDockWrapperRight').addClass('shiftFbDockWrapper');
  }

  function bindSidebarEvents() {
    $('.followupSidebar').delegate('li a.followupContactLink', 'click', function (e) {
      $contactItem = $(this).parent();
      var contactId = $contactItem.attr('data-contactid');
      $contactItem.remove();
      removeContactFromDB(contactId);
    });
  }

  // inject sidebar into facebook
  function insertSidebar() {
    // $fbChatSidebar = $('.fbChatSidebar');
    var $fbChatSidebarContainer = $('#pagelet_sidebar');

    var $sidebar = $(sidebarTemplateString);

    // $sidebar.insertAfter($fbChatSidebar);
    $sidebar.insertAfter($fbChatSidebarContainer);

    bindSidebarEvents();
  }

  function removeRoomForSidebar() {
    $('body').removeClass('shiftBody');
    $('.fbChatSidebar').removeClass('shiftFbChatSidebar');
    $('.fbDockWrapperRight').removeClass('shiftFbDockWrapper');
  }

  function hideSidebar() {
    $('.followupSidebarContainer').addClass('hidden');
  }

  function createContactElement(fbContact) {
    var $fbContact = $(followupContactTemplateString);
    $fbContact.attr('data-contactid', fbContact.contactId);
    $fbContact.find('.followupContactName').first().text(fbContact.fbContactName);
    var formattedDate = moment(fbContact.followupDate, 'x').fromNow();
    $fbContact.find('.followupDate').first().text(formattedDate);
    return $fbContact;
  }

  function addContactsToSidebar() {
    chrome.runtime.sendMessage({ message: 'FETCH_CONTACTS_FROM_DB', fbUsername: fbUsername });
  }

  function addContactToSidebar(fbContact) {
    var $fbContact = createContactElement(fbContact);
    $('.followupContactList').append($fbContact);
  }

  function revealSidebar() {
    $('.followupSidebarContainer').removeClass('hidden');
  }

  function createSidebar() {
    insertSidebar();
    addContactsToSidebar();
  }

  function openSidebar() {
    makeRoomForSidebar();
    if (sidebarLoaded) {
      revealSidebar();
    } else {
      sidebarLoaded = true;
      createSidebar();
    }
  }

  function closeSidebar() {
    removeRoomForSidebar();
    hideSidebar();
  }

  // listen for OPEN_SIDEBAR message
  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.message === 'OPEN_SIDEBAR') {
        openSidebar();
      } else if (request.message === 'CLOSE_SIDEBAR') {
        closeSidebar();
      } else if (request.message === 'RECEIVED_CONTACT_FROM_DB') {
        addContactToSidebar(request.fbContact);
      }
    });

});
