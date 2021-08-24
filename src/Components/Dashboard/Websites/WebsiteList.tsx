import WebsiteItem from "Components/Dashboard/Websites/WebsiteItem";
import { dashboardSelector } from "Domain/Dashboard/DashboardSelectors";
import { useAppSelector } from "Domain/Hooks";

const WebsiteList = () => {
  const { blockableWebsites } = useAppSelector(dashboardSelector);

  return (
    <ul>
      {blockableWebsites.map(({ url, isBlocked }) => (
        <WebsiteItem isBlocked={isBlocked} websiteUrl={url} />
      ))}
    </ul>
  );
};

export default WebsiteList;
