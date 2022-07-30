import React, { ReactNode, useRef } from "react";
import { useAppDispatch, useAppSelector } from "Domain/Hooks";
import { addProject, selectProject } from "Domain/Projects/ProjectsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { selectedProjectSelector } from "Domain/Projects/ProjectsSelectors";

const ProjectUpdateForm = ({
  onProjectAdd,
  title,
}: {
  onProjectAdd?: () => void;
  title?: ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const selectedProject = useAppSelector(selectedProjectSelector);

  const inputEl = useRef(null);

  const addNewProject = (event) => {
    event.preventDefault();
    const projectId = nanoid();

    dispatch(
      addProject({
        id: projectId,
        title: inputEl.current.value,
      })
    );

    if (!selectedProject) {
      dispatch(selectProject(projectId));
    }

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
      <input
        type="text"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500 dark:shadow-sm-light mb-5 transition duration-100"
        placeholder="Project name"
        autoFocus
        required
        ref={inputEl}
        id="project-name"
      />

      <button
        type="submit"
        className="text-white bg-sky-700 hover:bg-sky-800 flex px-6 h-[40px] text-white rounded-sm transition-colors duration-300 items-center"
      >
        <span className="text-sm font-medium">Add</span>
      </button>
    </form>
  );
};

export default ProjectUpdateForm;
