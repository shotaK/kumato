import TabsCommon from "Components/Shared/Tabs";
import Pomodoro from "Components/Pomodoro";
import Todo from "Components/Todo";
import { ClockIcon, BadgeCheckIcon } from "@heroicons/react/outline";

const Tabs = () => {
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
    />
  );
};

export default Tabs;
