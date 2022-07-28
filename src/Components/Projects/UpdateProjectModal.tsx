import React, { ReactNode, useRef, useState } from "react";
import Modal from "Components/Shared/Modal";
import { useAppDispatch } from "Domain/Hooks";
import { addProject } from "Domain/Projects/ProjectsSlice";
import { nanoid } from "@reduxjs/toolkit";

const UpdateProjectModal = ({
  isOpen,
  closeModal,
  sourceElement,
  title,
}: {
  isOpen: boolean;
  closeModal: () => void;
  sourceElement: ReactNode;
  title?: ReactNode;
}) => {
  const dispatch = useAppDispatch();

  const inputEl = useRef(null);

  const addNewProject = (event) => {
    event.preventDefault();
    dispatch(
      addProject({
        id: nanoid(),
        title: inputEl.current.value,
      })
    );
    closeModal();
  };

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      closeModal={closeModal}
      sourceElement={sourceElement}
    >
      <form onSubmit={addNewProject}>
        <input
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-4"
          placeholder="Project name"
          autoFocus
          required
          ref={inputEl}
        />

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </form>
    </Modal>
  );
};

export default UpdateProjectModal;
