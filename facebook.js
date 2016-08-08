$(function () {
  // extend jquery
  $.fn.exists = function () {
    return this.length !== 0;
  };

  const ONE_DAY_MILLISECONDS = 86400000;

  var sidebarOpen = false;

  // followup icon to place in chat window
  const iconTemplateString = [
    '<span class="_3a61">',
    ' <a data-reactroot aria-label="Follow up with this conversation" class="nubFollowupIcon _3olv button" data-hover="tooltip" data-tooltip-alignv="top" data-tooltip-content="Follow up with this conversation" href="#">',
    ' </a>',
    '</span>',
  ].join('\n');

  const followupContactTemplateString = [
    '<li class="followupContactItem _42fz">',
       '<div class="followupContactLink">',
          '<a class="followupCloseButton" href="#">&times;</a>',
          '<div class="_55lp">',
             '<div class="_5bon">',
               '<div class="_568z">',
                 '<div class="followupDate"></div>',
              '</div>',
             '</div>',
             '<div class="followupContactName"></div>',
          '</div>',
       '</div>',
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
                   '<div>',
                      '<div class="fbChatOrderedList clearfix">',
                        '<div>',
                          '<div class="followupHeading now">Today</div>',
                          '<ul class="followupNowList">',
                          '</ul>',
                        '</div>',
                        '<div class="followupHeading later">Later</div>',
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

  // turns facebook username into a firebase-appropriate username
  function formatUsername(fbUsername) {
    return fbUsername.replace(/\./g, '-').toLowerCase();
  }

  // extract fb profile URL from profile icon in blue bar
  var fbProfileURL = $('a[data-testid="blue_bar_profile_link"]').first().attr('href');

  // get the username after the '/' character in the profile url
  var fbUsername = formatUsername(fbProfileURL.split('/').pop());
  

  // has the sidebar been loaded for the first time
  var sidebarLoaded = false;

  // send message to background checking whether contact with name exists
  function doesContactExist(fbUsername, contactName, callback) {
    chrome.runtime.sendMessage(
      { message: 'DOES_CONTACT_EXIST',
        fbUsername: fbUsername,
        contactName: contactName
      }, callback);
  }

  // add icon to nub and style appropriately
  function configureOpenNub($nub) {
    $nub.addClass('followupButtonAdded');

    var contactName = $nub.find('a.titlebarText span')[0].innerText;
    var $titlebar = $nub.find('.titlebarButtonWrapper').first();
    var $iconWrapper = $(iconTemplateString).prependTo($titlebar);
    var $iconLink = $iconWrapper.children('a').first();
    
    doesContactExist(fbUsername, contactName, function(response) {
      if (response.exists) {
        $iconLink.addClass('active');
        $iconLink.attr('data-contactid-nub', response.contactId);
      }
    });
  }

  // make sure that nub is a fully loaded open nub (we know its fully loaded if the contact name is present)
  function isOpenNub($nub) {
    return $nub.find('a.titlebarText span').exists()
      && $nub.find('a.titlebarText span')[0].innerText.length > 0
      && $nub.find('.titlebarButtonWrapper');
  }

  // fetch all open facebook chat windows and insert icon
  var $openedNubs = $('.fbNub.opened');
  $openedNubs.each(function (index) {
    var $nub = $(this);

    // if nub is actually an open nub
    if (isOpenNub($nub)) {
      configureOpenNub($nub);
    }
  });

  // listen for opened chat windows and add icon
  $('.fbNubGroup .fbNubGroup').on('DOMNodeInserted', function (e) {
    var $potentialNubs = $('.fbNub.opened');
    $potentialNubs.each(function (index) {
      var $nub = $(this);
      if (!$nub.hasClass('followupButtonAdded') && isOpenNub($nub)) { // if it is a new nub
        configureOpenNub($nub);
      }
    });
  });

  // handle clicks on follow up buttons
  $('.fbNubGroup .fbNubGroup').delegate('.nubFollowupIcon', 'click', function (e) {
    e.preventDefault();
    var $icon = $(this);

    if ($icon.hasClass('active')) { // remove contact
      var contactId = $icon.attr('data-contactid-nub');
      var $contactItem = $('.followupContactItem[data-contactid="' + contactId + '"]');
      $contactItem.remove();
      removeContactFromDB(contactId);
      $icon.removeClass('active');
      $icon.removeAttr('data-contactid-nub');
    } else { // add contact
      var followupDate = Date.now() + ONE_DAY_MILLISECONDS * 2; // defaults to 2 days for now
      var contactName = $icon.parent().parent().parent().find('.titlebarText')[0].firstChild.innerText;
      addContactToDB(fbUsername, { contactName: contactName, followupDate: followupDate }, function(response) {
        $icon.attr('data-contactid-nub', response.contactId);
        $icon.addClass('active');
      });
    }
  });

  // send ADD_CONTACT message w/ contact info to background script
  function addContactToDB(fbUsername, contact, callback) {
    chrome.runtime.sendMessage(
      { message: 'ADD_CONTACT_TO_DB',
        fbUsername: fbUsername,
        contact: contact }, callback);
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
    $('.followupSidebar').delegate('a.followupCloseButton', 'click', function (e) {
      // remove item from list
      var $contactItem = $(this).parent().parent();
      var contactId = $contactItem.attr('data-contactid');
      $contactItem.remove();
      // locate this person's open nub (if indeed there is one)
      var $iconLink = $('a[data-contactid-nub="' + contactId + '"]');
      $iconLink.removeClass('active');
      $iconLink.removeAttr('data-contactid-nub');
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

  function createContactElement(contact) {
    var $contact = $(followupContactTemplateString);
    $contact.attr('data-contactid', contact.contactId);
    $contact.find('.followupContactName').first().text(contact.contactName);
    var formattedDate = moment(contact.followupDate, 'x').fromNow();
    $contact.find('.followupDate').first().text(formattedDate);
    return $contact;
  }

  function addContactsToSidebar() {
    chrome.runtime.sendMessage({ message: 'FETCH_CONTACTS_FROM_DB', fbUsername: fbUsername });
  }

  function appendInOrder(listClass, $contact, followupDate) {
    var $list = $(listClass);

    var inserted = false; // tracks whether element was inserted into list
    $list.children().each(function(index) {
      var $existingContact = $(this);
      var existingContactFollowupDate = $existingContact.attr('data-followupdate');
      if (followupDate < existingContactFollowupDate) {
        $contact.insertBefore($existingContact);
        inserted = true;
        return false; // breaks each loop
      }
    });

    if (!inserted) { // element is largest or list is empty
      $list.append($contact);  
    }
  }

  function addContactToSidebar(contact) {
    var $contact = createContactElement(contact);
    $contact.attr('data-followupdate', contact.followupDate);
    
    var followUpDate = moment(contact.followupDate, 'x')
    var endOfToday = moment({hour: 23, minute: 59, seconds: 59, milliseconds: 999});
    var isDue = followUpDate.isBefore(endOfToday);
    if (isDue) {
      $contact.find('.followupContactName').addClass('now');
      $contact.find('.followupDate').addClass('now');
      $contact.addClass('now');
      appendInOrder('.followupNowList', $contact, contact.followupDate);
    } else {
      appendInOrder('.followupContactList', $contact, contact.followupDate);
    }
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
      if (request.message === 'TOGGLE_SIDEBAR') {
        if (sidebarOpen) {
          closeSidebar();
          sidebarOpen = false;
        } else {
          openSidebar();
          sidebarOpen = true;
        }
      } else if (request.message === 'RECEIVED_CONTACT_FROM_DB') {
        addContactToSidebar(request.contact);
      }
    });

});
