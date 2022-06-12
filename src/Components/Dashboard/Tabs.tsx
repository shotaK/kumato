import TabsCommon from "Components/Shared/Tabs";
import Pomodoro from "Components/Pomodoro";
import Todo from "Components/Todo";
import { BadgeCheckIcon, ClockIcon } from "@heroicons/react/outline";
import { useAppDispatch, useAppSelector } from "Domain/Hooks";
import { MainTab, updateMainTab } from "Domain/Dashboard/DashboardSlice";
import { mainTabSelector } from "Domain/Dashboard/DashboardSelector";
import { useMemo } from "react";

const Tabs = () => {
  const dispatch = useAppDispatch();
  const { mainTab } = useAppSelector(mainTabSelector);
  console.log("comp mainTab", mainTab);

  const onTabChange = (tabData) => {
    dispatch(updateMainTab(tabData.id));
  };

  const tabs = useMemo(
    () => [
      {
        id: MainTab.pomodoro,
        label: "Pomodoro",
        content: <Pomodoro />,
        icon: ClockIcon,
      },
      {
        id: MainTab.todo,
        label: "Todo",
        content: <Todo />,
        icon: BadgeCheckIcon,
      },
    ],
    []
  );

  const selectedTabIndex = useMemo(
    () => tabs.findIndex(({ id }) => id === mainTab),
    [tabs, mainTab]
  );

  return (
    <TabsCommon
      tabsData={tabs}
      onTabChange={onTabChange}
      selectedIndex={selectedTabIndex}
    />
  );
};

export default Tabs;
