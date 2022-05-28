import AddField from "Components/Pomodoro/Websites/AddField";
import WebsiteList from "Components/Pomodoro/Websites/WebsiteList";

const Websites = () => {
  return (
    <>
      <div className="mb-3">
        <AddField />
      </div>

      <WebsiteList />
    </>
  );
};

export default Websites;
