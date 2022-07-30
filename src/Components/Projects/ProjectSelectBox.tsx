import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import {
  projectsListSelector,
  selectedProjectSelector,
} from "Domain/Projects/ProjectsSelectors";
import { useAppDispatch, useAppSelector } from "Domain/Hooks";
import { Project } from "Domain/Projects/Types";
import { selectProject } from "Domain/Projects/ProjectsSlice";

const ProjectSelectBox = () => {
  const projectsList = useAppSelector(projectsListSelector);
  const dispatch = useAppDispatch();
  const selectedProject = useAppSelector(selectedProjectSelector);

  const handleSelectProject = (project: Project) => {
    dispatch(selectProject(project.id));
  };

  return (
    <div className="w-60">
      <Listbox value={selectedProject} onChange={handleSelectProject}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-sm bg-coolGray-100 py-1 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedProject.title}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-sm bg-coolGray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm">
              {projectsList.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-1 pl-7 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.title}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-1 text-orange-500">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ProjectSelectBox;
