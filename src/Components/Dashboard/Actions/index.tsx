import classNames from "classnames";
import {
  PauseIcon,
  PlayIcon,
  CheckCircleIcon,
  XIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

import ActionButton from "Components/Dashboard/Actions/ActionButton";
import { useAppSelector, useAppDispatch } from "Domain/Hooks";
import { dashboardSelector } from "Domain/Dashboard/DashboardSelectors";
import {
  completeBreak,
  completeCycle,
  discardBreak,
  discardCycle,
  pauseCycle,
  resumeCycle,
  startBreak,
  startCycle,
} from "Domain/Dashboard/DashboardSlice";

const Actions = () => {
  const dispatch = useAppDispatch();
  const { cycleStarted, cycleRunning, cyclesCompleted, breakStarted } =
    useAppSelector(dashboardSelector);

  return (
    <div>
      <div
        className={classNames(
          "flex",
          { "justify-between": cycleStarted || cyclesCompleted },
          { "justify-evenly": breakStarted },
          {
            "justify-center":
              !cycleStarted && !cyclesCompleted && !breakStarted,
          },
          { "mt-6": !cycleStarted }
        )}
      >
        {cycleStarted || breakStarted ? (
          <>
            <ActionButton
              icon={CheckCircleIcon}
              text="Complete"
              className="bg-green-500 hover:bg-green-600"
              onClick={() => {
                if (cycleStarted) {
                  dispatch(completeCycle());
                }

                if (breakStarted) {
                  dispatch(completeBreak());
                }
              }}
            />

            {!breakStarted &&
              (cycleRunning ? (
                <ActionButton
                  icon={PauseIcon}
                  text="Pause"
                  className="bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => dispatch(pauseCycle())}
                />
              ) : (
                <ActionButton
                  icon={PlayIcon}
                  text="Resume"
                  className="bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => dispatch(resumeCycle())}
                />
              ))}

            <ActionButton
              icon={XIcon}
              text="Discard"
              className="bg-red-500 hover:bg-red-600"
              onClick={() => {
                if (cycleStarted) {
                  dispatch(discardCycle());
                }

                if (breakStarted) {
                  dispatch(discardBreak());
                }
              }}
            />
          </>
        ) : (
          <>
            <ActionButton
              icon={PlayIcon}
              text="Start"
              className="bg-teal-500 hover:bg-teal-600 px-12"
              onClick={() => dispatch(startCycle())}
            />
            {Boolean(cyclesCompleted) && (
              <ActionButton
                icon={SparklesIcon}
                text="Start Break"
                className="bg-fuchsia-500 hover:bg-fuchsia-600 px-7"
                onClick={() => dispatch(startBreak())}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Actions;
