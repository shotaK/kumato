import AddField from "Components/Pomodoro/Websites/AddField";
import WebsiteList from "Components/Pomodoro/Websites/WebsiteList";
import Container from "Components/Shared/Layout/Container";

const Websites = () => {
  return (
    <>
      <Container className="mb-3">
        <AddField />
      </Container>

      <WebsiteList />
    </>
  );
};

export default Websites;
