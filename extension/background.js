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

const showNotification = (description) => {
  const notificationOptions = {
    type: "basic",
    iconUrl: "icon_128.png",
    title: "Kumato",
    message: description,
  };

  chrome.notifications.create(notificationOptions);
};

chrome.storage.onChanged.addListener(function (changes, namespace) {
  chrome.storage.local.get(
    null,
    ({
      remainingSeconds,
      cycleStarted,
      breakStarted,
      cyclesCompleted,
      breakCompleted,
    }) => {
      for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        if (key === "cycleStarted") {
          // Start cycle
          if (!oldValue && newValue) {
            remainingSecondsLocal = remainingSeconds;
            startTimer();
          }

          // Make cycle completed or discarded
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

        if (key === "breakStarted") {
          // Start cycle
          if (!oldValue && newValue) {
            remainingSecondsLocal = remainingSeconds;
            startTimer();
          }

          // Make break completed or discarded
          if (oldValue && !newValue) {
            remainingSecondsLocal = 0;
            stopTimer();
          }
        }

        if (key === "remainingSeconds") {
          // handle cycle or break end
          if (newValue === 0) {
            if (cycleStarted) {
              chrome.storage.local.set({
                cycleStarted: false,
                cycleRunning: false,
                cyclesCompleted: cyclesCompleted + 1,
              });

              showNotification(
                "Congratulations! Kumato cycle has been finished."
              );
            }

            if (breakStarted) {
              chrome.storage.local.set({
                breakStarted: false,
                breakCompleted: breakCompleted + 1,
              });

              showNotification("Break has been finished.");
            }
          } else if (oldValue !== newValue) {
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
