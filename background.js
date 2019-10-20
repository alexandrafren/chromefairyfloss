chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#5A5475'}, function() {
      console.log("The theme is fairy and flossy!");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostContains: '.'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });