import get from "lodash.get";

console.log(get(global, "chrome"));

const chromeApi = get(global, "chrome.runtime")
  ? get(global, "chrome")
  : {
      runtime: {
        sendMessage: (data: Record<string, any>, callback: () => {}) => {
          callback();
        },
      },
    };

export const tickApi = () =>
  chromeApi.runtime.sendMessage({ tick: "tick" }, function () {
    console.log("ticked");
  });
