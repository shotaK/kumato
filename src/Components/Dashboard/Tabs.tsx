import TabsCommon from "Components/Shared/Tabs";
import Pomodoro from "Components/Pomodoro";
import Todo from "Components/Todo";

const Tabs = () => {
  return (
    <div>
      <TabsCommon
        tabsData={[
          {
            id: "pomodoro",
            label: "Promodoro",
            content: <Pomodoro />,
          },
          {
            id: "todo",
            label: "Todo",
            content: <Todo />,
          },
        ]}
      />
    </div>
  );
};

export default Tabs;
