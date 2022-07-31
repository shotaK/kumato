import TabsCommon from "Components/Shared/Tabs";
import Pomodoro from "Components/Pomodoro";
import Todo from "Components/Todo";
import {
  BadgeCheckIcon,
  ClockIcon,
  NewspaperIcon,
} from "@heroicons/react/outline";
import { useAppDispatch, useAppSelector } from "Domain/Hooks";
import { MainTab, updateMainTab } from "Domain/Dashboard/DashboardSlice";
import { mainTabSelector } from "Domain/Dashboard/DashboardSelector";
import { useMemo } from "react";
import Daily from "Components/Daily";
import { projectsEmptySelector } from "Domain/Projects/ProjectsSelectors";

const Tabs = () => {
  const dispatch = useAppDispatch();
  const { mainTab } = useAppSelector(mainTabSelector);
  const projectsEmpty = useAppSelector(projectsEmptySelector);

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
      ...(!projectsEmpty
        ? [
            {
              id: MainTab.daily,
              label: "Daily",
              content: <Daily />,
              icon: NewspaperIcon,
            },
          ]
        : []),
    ],
    [projectsEmpty]
  );

  const selectedTabIndex = useMemo(
    () => tabs.findIndex(({ id }) => id === mainTab),
    [tabs, mainTab]
  );

  return (
    <>
      <TabsCommon
        tabsData={tabs}
        onTabChange={onTabChange}
        selectedIndex={selectedTabIndex}
      />
    </>
  );
};

export default Tabs;
