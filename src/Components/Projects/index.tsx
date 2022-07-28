import ProjectSelectBox from "Components/Projects/ProjectSelectBox";
import AddProjectButton from "Components/Projects/AddProjectButton";

const Index = () => {

  return (
    <div className="mb-4 pl-6 pr-4">
      <form className="flex justify-between">
        <label className="text-white text-sm flex items-center">Project:</label>
        <ProjectSelectBox />
        <AddProjectButton />
      </form>
    </div>
  );
};

export default Index;
