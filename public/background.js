// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log("ticked: ", request);
// });

let cycleTimer;
let remainingSecondsLocal = 0;

const setStorageSyncData = (key, value) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ [key]: value }, () => {
      resolve({ [key]: value });
    });
  });
};

const stopTimer = (remainingSeconds) => {
  if (cycleTimer) {
    clearInterval(cycleTimer);
  }
};

const startTimer = () => {
  if (!cycleTimer) {
    cycleTimer = setInterval(() => {
      remainingSecondsLocal = remainingSecondsLocal - 99;
      //   setStorageSyncData("remainingSeconds", remainingSecondsLocal);

      console.log(remainingSecondsLocal);
    }, 1000);
  }
};

// items
// blockableWebsites: [];
// breakCompleted: 0;
// breakDuration: 15;
// breakStarted: false;
// cycleDuration: 45;
// cycleRunning: true;
// cycleStarted: true;
// cyclesCompleted: 8;
// remainingSeconds: 2700
// key: 0;

chrome.storage.onChanged.addListener(function (changes, namespace) {
  chrome.storage.local.get(null, ({ cycleDuration, remainingSeconds }) => {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
      if (key === "cycleStarted") {
        remainingSecondsLocal = remainingSeconds;
        if (!oldValue && newValue) {
          startTimer();
        }
      }

      if (key === "remainingSeconds") {
        // if (oldValue !== newValue) {
        //   const minutes = Math.floor(newValue / 60);
        //   chrome.browserAction.setBadgeBackgroundColor({ color: "#a39448" });
        //   chrome.browserAction.setBadgeText({
        //     text: (minutes + 1).toString() + "m",
        //   });
        // }
      }
    }
  });
});
