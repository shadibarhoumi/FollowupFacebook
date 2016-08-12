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
             '<div class="dateWrapper">',
               '<div class="followupDate"></div>',
               '<div class="editDate hidden">in <span class="editDayCount" contenteditable=true>2</span> days</div>',
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
      '<div class="followupText _5qqe">Follow Up</div>',
      '<div aria-label="Followup for Facebook" class="fbChatSidebarBody followupSidebar" role="complementary" style="height: 100%;">',
       '<h3 class="accessible_elem">Followup for Facebook</h3>',
       '<div class="uiScrollableArea scrollableOrderedList _5qmw fade contentAfter" style="width:252px;">',
          '<div class="uiScrollableAreaWrap scrollable" aria-label="Scrollable region" role="group" tabindex="0">',
             '<div class="uiScrollableAreaBody" style="width:205px;">',
                '<div class="uiScrollableAreaContent">',
                   '<div>',
                      '<div class="fbChatOrderedList clearfix">',
                        '<div class="nowWrapper hidden">',
                          '<div class="followupHeading now">Today</div>',
                          '<ul class="followupNowList"></ul>',
                        '</div>',
                        '<div class="laterWrapper hidden">',
                          '<div class="followupHeading later">Later</div>',
                          '<ul class="followupLaterList"></ul>',
                        '</div>',
                      '</div>',
                      '<div class="inboxZeroMessage">Inbox Zero!</div>',
                   '</div>',
                '</div>',
             '</div>',
          '</div>',
        '</div>',
      '</div>',
    '</div>',
  ].join('\n');

  const dateEntryPopup = [
    '<div class="dateEntryPopup">',
      'This is the Date Entry Popup!',
      '<input placeholder="days">',
      '<>',
    '</div>',
  ].join('\n');

  // used to set position in contenteditable div
  function setCaretPosition($element, position) {
    var textNode = $element[0].firstChild;
    var caret = position;
    var range = document.createRange();
    range.setStart(textNode, caret);
    range.setEnd(textNode, caret);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function parseDate(dateString) {
    var argArray = dateString.split(' ');
    if (argArray.length !== 2) return moment();
    var timeNumber = parseInt(argArray[0]);
    var partOfDate = argArray[1];
    return moment().add(timeNumber, partOfDate);
  }

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
      
      removeContactItemAndUpdateList($contactItem);
      removeContactFromDB(contactId);

      deactivateNubIcon($icon);
    } else { // add contact
      var followupDate = Date.now() + ONE_DAY_MILLISECONDS * 2; // defaults to 2 days for now
      var contactName = $icon.parent().parent().parent().find('.titlebarText')[0].firstChild.innerText;
      addContactToDB(fbUsername, { contactName: contactName, followupDate: followupDate }, function(response) {
        $icon.attr('data-contactid-nub', response.contactId);
        $icon.addClass('active');
      });
      openSidebar();
    }
  });

  // grey out nub icon and strip data attributes
  function deactivateNubIcon($icon) {
    $icon.removeClass('active');
    $icon.removeAttr('data-contactid-nub');
  }

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

  function updateContactDateInDB(contactId, followupDate) {
    chrome.runtime.sendMessage({ message: 'UPDATE_CONTACT_DATE_IN_DB', fbUsername: fbUsername, contactId: contactId, followupDate: followupDate });
  }

  // removes contact node from DOM and removes lists / displays inbox zero message if necessary
  function removeContactItemAndUpdateList($contactItem) {
    var contactId = $contactItem.attr('data-contactid');
    
    var $list = $contactItem.parent();
    var $listWrapper = $contactItem.parent().parent();
    $contactItem.remove();

    // remove list heading if contact was last in list
    if ($list.children().length === 0) {
      $listWrapper.addClass('hidden');
    }

    // if no contacts in either list
    if ($('.followupNowList').children().length === 0 && $('.followupLaterList').children().length === 0) {
      $('.inboxZeroMessage').removeClass('hidden');
    }
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
      var $contactItem = $(this).parent().parent();
      var contactId = $contactItem.attr('data-contactid');

      // remove item from list 
      removeContactItemAndUpdateList($contactItem);
      
      // locate this person's open nub (if indeed there is one)
      var $icon = $('a[data-contactid-nub="' + contactId + '"]');
      deactivateNubIcon($icon);
    });

    $('.followupSidebar').delegate('.followupDate', 'click', function (e) {
      var $followupDate = $(e.target);
      $followupDate.text('2 days');

      setCaretPosition($followupDate, 1);

      $followupDate.attr('contenteditable', 'true');
      $followupDate.addClass('editing');
      $followupDate.focus();
    });

    $('.followupSidebar').delegate('.followupDate', 'keydown', function (e) {
      if (e.keyCode === 13) {
        $(e.target).blur();
      }
    });

    $('.followupSidebar').delegate('.followupDate.editing', 'blur', function (e) {
      e.preventDefault();
      $followupDate = $(e.target);
      $followupDate.attr('contenteditable', 'false');
      $followupDate.removeClass('editing');

      var newFollowupDate = parseDate($followupDate.text());
      var newFollowupDateUnix = parseInt(newFollowupDate.format('x'));
      $followupDate.text(newFollowupDate.fromNow());

      var $contactItem = $followupDate.parent().parent().parent().parent();
      $contactItem.attr('data-followupdate', newFollowupDateUnix);
      var contactId = $contactItem.attr('data-contactid');
      updateContactDateInDB(contactId, newFollowupDateUnix);
      removeContactItemAndUpdateList($contactItem);
      addContactItemToSidebar($contactItem);
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

  function addContactItemToSidebar($contactItem) {
    $('.inboxZeroMessage').addClass('hidden');
    
    var followupDateUnix = $contactItem.attr('data-followupdate');
    var followUpDate = moment(followupDateUnix, 'x')
    var endOfToday = moment({hour: 23, minute: 59, seconds: 59, milliseconds: 999});
    var isDue = followUpDate.isBefore(endOfToday);
    if (isDue) {
      $contactItem.find('.followupContactName').addClass('now');
      $contactItem.find('.followupDate').addClass('now');
      $contactItem.addClass('now');
      $('.nowWrapper').removeClass('hidden');
      appendInOrder('.followupNowList', $contactItem, followupDateUnix);
    } else {
      $('.laterWrapper').removeClass('hidden');
      $contactItem.find('.followupContactName').removeClass('now');
      $contactItem.find('.followupDate').removeClass('now');
      $contactItem.removeClass('now');
      appendInOrder('.followupLaterList', $contactItem, followupDateUnix);
    }
  }

  function addContactToSidebar(contact) {
    var $contactItem = createContactElement(contact);
    $contactItem.attr('data-followupdate', contact.followupDate);
    addContactItemToSidebar($contactItem);
  }

  function revealSidebar() {
    $('.followupSidebarContainer').removeClass('hidden');
  }

  function createSidebar() {
    insertSidebar();
    addContactsToSidebar();
  }

  function openSidebar() {
    if (!sidebarOpen) {
      makeRoomForSidebar();
      if (sidebarLoaded) {
        revealSidebar();
      } else {
        sidebarLoaded = true;
        createSidebar();
      }
      sidebarOpen = true;
    }
  }

  function closeSidebar() {
    if (sidebarOpen) {
      removeRoomForSidebar();
      hideSidebar();
      sidebarOpen = false;
    }
  }

  // listen for OPEN_SIDEBAR message
  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.message === 'TOGGLE_SIDEBAR') {
        if (sidebarOpen) {
          closeSidebar();
        } else {
          openSidebar();
        }
      } else if (request.message === 'RECEIVED_CONTACT_FROM_DB') {
        addContactToSidebar(request.contact);
      }
    });

  // check whether there are followups due today
  chrome.runtime.sendMessage(
    { message: 'CHECK_FOLLOWUPS_DUE', fbUsername: fbUsername },
    function(response) {
      if (!!response && response.followupsDue) {
        openSidebar();
      }
    });
});
