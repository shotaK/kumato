import AddField from "Components/Dashboard/Websites/AddField";
import WebsiteList from "Components/Dashboard/Websites/WebsiteList";

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
