var runningReact = !!document.querySelector('[data-reactid]');
if (runningReact) {
  chrome.runtime.sendMessage({react: true});
}
