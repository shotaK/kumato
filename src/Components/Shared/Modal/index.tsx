import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import ModalCloseButton from "Components/Shared/Modal/ModalCloseButton";

const Modal = ({
  isOpen,
  closeModal,
  sourceElement,
  title,
  children,
}: {
  isOpen: boolean;
  closeModal: () => void;
  sourceElement: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
}) => {
  return (
    <div className="relative">
      <div className="inset-0 flex items-center justify-center">
        {sourceElement}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="mt-16 w-96 pl-6 pr-4">
                  <Dialog.Panel className="transform overflow-hidden rounded-sm bg-white p-6 text-left shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 mb-4"
                    >
                      {title}
                    </Dialog.Title>
                    {children}
                  </Dialog.Panel>

                  <ModalCloseButton />
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;
