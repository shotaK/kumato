import Container from "Components/Shared/Layout/Container";
import InputButtonGroup from "Components/Shared/Input/InputButtonGroup";
import { CheckIcon, RefreshIcon, BanIcon } from "@heroicons/react/outline";
import { Fragment, ReactNode, useMemo, useState } from "react";
import { DailyReportItem, DailyReportType } from "Domain/Daily/Types";
import { useAppDispatch } from "Domain/Hooks";
import { addReportItem } from "Domain/Daily/DailySlice";
import { nanoid } from "@reduxjs/toolkit";

const DailyPointForm = ({
  title,
  reportType,
  reportsList,
}: {
  title: ReactNode;
  reportType: DailyReportType;
  reportsList: DailyReportItem[];
}) => {
  const dispatch = useAppDispatch();
  const [description, setDescription] = useState("");

  const [icon, color] = useMemo(() => {
    switch (reportType) {
      case "accomplished":
        return [CheckIcon, "green"];
      case "upcoming":
        return [RefreshIcon, "orange"];
      case "blocked":
        return [BanIcon, "red"];
      default:
        return [Fragment, "white"];
    }
  }, [reportType]);

  const Icon = icon;

  const handleAddReportItem = () => {
    if (description) {
      dispatch(
        addReportItem({
          id: nanoid(),
          description,
          type: reportType,
        })
      );

      setDescription("");
    }
  };

  return (
    <div className="mb-6">
      <Container>
        <label className="flex text-white text-md mb-2">{title}</label>
      </Container>
      <Container className="mb-3">
        <InputButtonGroup
          inputValue={description}
          handleChange={(value) => {
            setDescription(value);
          }}
          onSubmit={handleAddReportItem}
          inputPlaceholder={"Enter your daily goal"}
        />
      </Container>
      <ul className="text-white text-sm list-none">
        {reportsList.map(({ id, description }) => (
          <li
            key={id}
            className="flex items-center hover:bg-[#4a4a4a] todo-item border-b border-b-neutral-500 first:border-t-neutral-500 first:border-t pl-4 py-1 pr-6"
          >
            <Icon className={`h-5 w-5 text-${color}-500 ml-1.5`} />

            <span className="pl-2 flex-1 break-all">{description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyPointForm;
