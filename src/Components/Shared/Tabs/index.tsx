import { ElementType, ReactNode } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({
  tabsData,
}: {
  tabsData: Array<{
    id: string;
    label: ReactNode;
    content: ReactNode;
    icon: ElementType;
  }>;
}) {
  return (
    <div className="w-full max-w-md px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl">
          {tabsData.map(({ id, label, icon: Icon }) => (
            <Tab
              key={id}
              className={({ selected }) =>
                classNames(
                  "flex items-center justify-center w-full rounded-sm py-1 mb-4 text-sm font-medium focus:outline-none",
                  selected
                    ? "text-coolGray-800 bg-coolGray-100 shadow"
                    : "text-coolGray-400 bg-coolGray-500 hover:bg-coolGray-400 hover:text-coolGray-100"
                )
              }
            >
              <Icon className="h-5 w-5  mr-1" />
              {label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {tabsData.map(({ id, content }) => (
            <Tab.Panel key={id}>{content}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
