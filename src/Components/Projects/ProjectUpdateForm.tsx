import React, { ChangeEvent, ReactNode, useState } from "react";
import { useAppDispatch } from "Domain/Hooks";
import { addProject, selectProject } from "Domain/Projects/ProjectsSlice";
import { nanoid } from "@reduxjs/toolkit";

const ProjectUpdateForm = ({
  onProjectAdd,
  title,
}: {
  onProjectAdd?: () => void;
  title?: ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [showError, setShowError] = useState(false);

  const nameTooLong = name && name.length > 30;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const addNewProject = (event) => {
    event.preventDefault();

    if (!name || nameTooLong) {
      setShowError(true);
      return;
    }
    const projectId = nanoid();

    dispatch(
      addProject({
        id: projectId,
        title: name,
      })
    );

    dispatch(selectProject(projectId));

    if (onProjectAdd) {
      onProjectAdd();
    }
  };

  return (
    <form onSubmit={addNewProject}>
      {title && (
        <label
          className="flex text-lg font-medium leading-6 text-white mb-4"
          htmlFor="project-name"
        >
          {title}
        </label>
      )}
      <div className="flex flex-col mb-5">
        <input
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-sky-500 focus:border-sky-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500 dark:shadow-sm-light transition duration-100 mb-2"
          placeholder="Project name"
          autoFocus
          id="project-name"
          value={name}
          onChange={handleChange}
        />
        {showError && (
          <span className="flex text-red-500 text-sm">
            {!name && "Project name is required"}
            {nameTooLong && "Project name is too long"}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="text-white bg-sky-700 hover:bg-sky-800 flex px-5 py-2 text-white rounded-sm transition-colors duration-300 items-center"
      >
        <span className="text-sm font-medium">Add</span>
      </button>
    </form>
  );
};

export default ProjectUpdateForm;
