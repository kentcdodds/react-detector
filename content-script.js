var selector = '[data-reactroot], [data-reactid]';

function checkForReact() {
  var runningReact = !!document.querySelector(selector);
  if (runningReact) {
    chrome.runtime.sendMessage({react: true});
  } else {
    // React isn't currently present, check again in a second in case it's
    // loaded after the page is initialized.
    setTimeout(checkForReact, 1000);
  }
}

var outlinesVisible = false;
var outlinesStyleNode = null;
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.toggleOutlines) {
      if (outlinesVisible) {
        outlinesStyleNode.remove();
        outlinesStyleNode = null;
      } else {
        outlinesStyleNode = document.createElement('style');
        outlinesStyleNode.textContent =
          selector + ' {outline: solid 1px rgba(97, 218, 251, 0.4)}';
        document.head.appendChild(outlinesStyleNode);
      }
      outlinesVisible = !outlinesVisible;
    }
  });

checkForReact();
