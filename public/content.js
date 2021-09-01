const isUrlBlocked = (blockableWebsite) => {
  return (
    blockableWebsite.isBlocked &&
    window.location.href.indexOf(blockableWebsite.url.toLowerCase()) !== -1
  );
};

chrome.storage.onChanged.addListener(function (changes, namespace) {
  chrome.storage.local.get(null, ({ cycleRunning, blockableWebsites }) => {
    if (cycleRunning) {
      blockableWebsites.forEach((blockableWebsite) => {
        if (isUrlBlocked(blockableWebsite)) {
          window.location = chrome.runtime.getURL("/pageBlocked.html");
        }
      });
    }
  });
});
