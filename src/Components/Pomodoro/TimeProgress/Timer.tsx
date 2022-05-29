import { pomodoroSelector } from "Domain/Pomodoro/PomodoroSelectors";
import { useAppSelector } from "Domain/Hooks";

const Timer = () => {
  const { remainingSeconds } = useAppSelector(pomodoroSelector);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds - minutes * 60;

  return <>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</>;
};

export default Timer;
