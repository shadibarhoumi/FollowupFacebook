$(function () {
  const ONE_DAY_MILLISECONDS = 86400000;

  // followup icon to place in chat window
  var iconTemplateString = [
    '<span class="_3a61">',
    ' <a data-reactroot aria-label="Follow up with this conversation" class="nubFollowupIcon _3olv button" data-hover="tooltip" data-tooltip-alignv="top" data-tooltip-content="Follow up with this conversation" href="#">',
    ' </a>',
    '</span>',
  ].join('\n');

  // sidebar
  var sidebarTemplateString = [
    '<div class="followupSidebarContainer">',
      '<div class="_5qqe"></div>',
      '<div aria-label="Followup for Facebook" class="fbChatSidebarBody followupSidebar" role="complementary" style="height: 100%;">',
       '<h3 class="accessible_elem">Followup for Facebook</h3>',
       '<div class="uiScrollableArea scrollableOrderedList _5qmw fade contentAfter" style="width:205px;" id="u_0_2q">',
          '<div class="uiScrollableAreaWrap scrollable" aria-label="Scrollable region" role="group" tabindex="0">',
             '<div class="uiScrollableAreaBody" style="width:205px;">',
                '<div class="uiScrollableAreaContent">',
                   '<div data-ft="{&quot;tn&quot;:&quot;+]&quot;}" id="u_0_2r">',
                      '<div class="fbChatOrderedList clearfix">',
                         '<div>',
                            '<ul>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Makechelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Michelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Michelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Michelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Michelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Michelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Michelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Michelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Michelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Michelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Michelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Michelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Michelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Michelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Michelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Michelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
                               '<li class="_42fz">',
                                  '<a class="_55ln" rel="ignore">',
                                     '<div class="_55lp">',
                                        '<div class="_55lq">',
                                           '<div size="32" class="_55lt" style="width: 32px; height: 32px;"><img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c28.0.64.64/p64x64/13321958_1314770658550849_4601290026555210969_n.jpg?oh=0a14b29203a3474c434214c57950a825&amp;oe=57EB3DD1" width="32" height="32" alt="" class="img"></div>',
                                        '</div>',
                                        '<div class="_5bon">',
                                           '<div class="_568z">',
                                              '<div class="_568-"></div>',
                                              '<i class="_568_ img sp_ZU0ZogyS2My_2x sx_eb6c62" alt=""></i>',
                                           '</div>',
                                        '</div>',
                                        '<div class="_55lr">Michelle McGhee</div>',
                                        '<div class="_55ls"></div>',
                                     '</div>',
                                  '</a>',
                               '</li>',
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

  // inject sidebar into facebook
  function insertSidebar() {
    // $fbChatSidebar = $('.fbChatSidebar');
    $fbChatSidebarContainer = $('#pagelet_sidebar');

    $sidebar = $(sidebarTemplateString);

    // $sidebar.insertAfter($fbChatSidebar);
    $sidebar.insertAfter($fbChatSidebarContainer);
  }

  function removeRoomForSidebar() {
    $('body').removeClass('shiftBody');
    $('.fbChatSidebar').removeClass('shiftFbChatSidebar');
    $('.fbDockWrapperRight').removeClass('shiftFbDockWrapper');
  }

  function openSidebar() {
    makeRoomForSidebar();
    insertSidebar();
  }

  function closeSidebar() {
    removeRoomForSidebar();
  }

  // listen for OPEN_SIDEBAR message
  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
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
