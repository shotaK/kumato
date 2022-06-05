import Actions from "Components/Pomodoro/Actions";
import Settings from "Components/Pomodoro/Settings";
import Stats from "Components/Pomodoro/Stats";
import TimeProgress from "Components/Pomodoro/TimeProgress";
import Websites from "Components/Pomodoro/Websites";
import { useAppSelector } from "Domain/Hooks";
import { pomodoroSelector } from "Domain/Pomodoro/PomodoroSelectors";
import useDataPersistor from "Hooks/useDataPersistor";
import Container from "Components/Shared/Layout/Container";

const Pomodoro = () => {
  const { cycleStarted, breakStarted } = useAppSelector(pomodoroSelector);
  useDataPersistor();

  return (
    <>
      <Container className="flex justify-between">
        <Stats />
        <Settings />
      </Container>

      {(cycleStarted || breakStarted) && <TimeProgress />}

      <Container className="mb-6">
        <Actions />
      </Container>

      <Websites />
    </>
  );
};

export default Pomodoro;
