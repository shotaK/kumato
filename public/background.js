let cycleTimer;
let remainingSecondsLocal = 0;

const setStorageSyncData = (key, value) => {
  chrome.storage.local.set({ [key]: value });
};

const stopTimer = () => {
  if (cycleTimer) {
    clearInterval(cycleTimer);
    cycleTimer = null;
    chrome.browserAction.setBadgeText({ text: "" });
  }
};

const startTimer = () => {
  if (!cycleTimer) {
    cycleTimer = setInterval(() => {
      if (remainingSecondsLocal > 0) {
        remainingSecondsLocal = remainingSecondsLocal - 1;
        setStorageSyncData("remainingSeconds", remainingSecondsLocal);
      }
    }, 1000);
  }
};

const getRemainingBadgeTime = (timeSeconds) => {
  const minutes = Math.floor(timeSeconds / 60);
  const seconds = timeSeconds % 60;

  if (minutes < 1) {
    return seconds.toString() + "s";
  }

  return minutes.toString() + "m";
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
  console.log(changes);
  chrome.storage.local.get(
    null,
    ({ cycleDuration, remainingSeconds, cycleStarted, breakStarted }) => {
      for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        if (key === "cycleStarted") {
          // Start cycle
          if (!oldValue && newValue) {
            remainingSecondsLocal = remainingSeconds;
            startTimer();
          }

          // Start completed or discarded
          if (oldValue && !newValue) {
            remainingSecondsLocal = 0;
            stopTimer();
          }
        }

        if (key === "breakStarted") {
          // Start cycle
          if (!oldValue && newValue) {
            remainingSecondsLocal = remainingSeconds;
            startTimer();
          }

          // Start completed or discarded
          if (oldValue && !newValue) {
            remainingSecondsLocal = 0;
            stopTimer();
          }
        }

        if (key === "cycleRunning") {
          // Pause cycle
          if (oldValue && !newValue) {
            stopTimer();
          }

          // Resume cycle
          if (!oldValue && newValue) {
            startTimer();
          }
        }

        if (key === "remainingSeconds") {
          if (oldValue !== newValue) {
            chrome.browserAction.setBadgeBackgroundColor({
              color: cycleStarted ? "#059669" : "#6D28D9",
            });
            chrome.browserAction.setBadgeText({
              text: getRemainingBadgeTime(newValue),
            });
          }
        }
      }
    }
  );
});
