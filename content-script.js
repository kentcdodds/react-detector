function checkForReact() {
  var runningReact = !!document.querySelector('[data-reactid]');
  if (runningReact) {
    chrome.runtime.sendMessage({react: true});
  } else {
    // React isn't currently present, check again in a second in case it's
    // loaded after the page is initialized.
    setTimeout(checkForReact, 1000);
  }
}

checkForReact();
