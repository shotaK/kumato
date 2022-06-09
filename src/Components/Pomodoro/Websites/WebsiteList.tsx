import WebsiteItem from "Components/Pomodoro/Websites/WebsiteItem";
import { pomodoroSelector } from "Domain/Pomodoro/PomodoroSelectors";
import { useAppSelector } from "Domain/Hooks";

const WebsiteList = () => {
  const { blockableWebsites } = useAppSelector(pomodoroSelector);

  return (
    <ul>
      {blockableWebsites.map(({ url, isBlocked }) => (
        <WebsiteItem key={url} isBlocked={isBlocked} websiteUrl={url} />
      ))}
    </ul>
  );
};

export default WebsiteList;
