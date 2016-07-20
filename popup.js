// get url of current tab
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true,
  };

  chrome.tabs.query(queryInfo, function (tabs) {
    var tab = tabs[0];
    var url = tab.url;
    callback(url);
  });
};

getCurrentTabUrl(function (url) {
  console.log('Current tab url: ' + url);
});
