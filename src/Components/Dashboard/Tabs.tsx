import TabsCommon from "Components/Shared/Tabs";
import Pomodoro from "Components/Pomodoro";
import Todo from "Components/Todo";
import { ClockIcon, BadgeCheckIcon } from "@heroicons/react/outline";

const Tabs = () => {
  const onTabChange = (tabData) => {
    console.log(tabData);
  };

  return (
    <TabsCommon
      tabsData={[
        {
          id: "pomodoro",
          label: "Pomodoro",
          content: <Pomodoro />,
          icon: ClockIcon,
        },
        {
          id: "todo",
          label: "Todo",
          content: <Todo />,
          icon: BadgeCheckIcon,
        },
      ]}
      onTabChange={onTabChange}
    />
  );
};

export default Tabs;
