console.log('react-detector background script started!');

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.react) {
      chrome.pageAction.show(sender.tab.id);
      console.log('ReactJS found at:', sender.tab.url);
    }
  });

chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, {toggleOutlines: true});
});
