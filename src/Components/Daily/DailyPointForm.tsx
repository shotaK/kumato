import Container from "Components/Shared/Layout/Container";
import InputButtonGroup from "Components/Shared/Input/InputButtonGroup";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { ReactNode, useState } from "react";
import {
  DailyReportItem,
  DailyReportType,
  ReportsViewMode,
} from "Domain/Daily/Types";
import { useAppDispatch, useAppSelector } from "Domain/Hooks";
import { addReportItem } from "Domain/Daily/DailySlice";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { dailySelector } from "Domain/Daily/DailySelectors";
import isEmpty from "lodash.isempty";
import ReportItem from "Components/Daily/ReportItem";
import { selectedProjectIdSelector } from "Domain/Projects/ProjectsSelectors";

const DailyPointForm = ({
  title,
  reportType,
  reportsList,
  placeholder,
}: {
  title: ReactNode;
  reportType: DailyReportType;
  reportsList: DailyReportItem[];
  placeholder: string;
}) => {
  const dispatch = useAppDispatch();
  const { reportsViewMode } = useSelector(dailySelector);
  const projectId = useAppSelector(selectedProjectIdSelector);

  const [description, setDescription] = useState("");

  const handleAddReportItem = () => {
    if (description) {
      dispatch(
        addReportItem({
          id: nanoid(),
          description,
          type: reportType,
          projectId,
        })
      );

      setDescription("");
    }
  };

  return (
    <div className="mb-6">
      <Container>
        <label
          className="flex text-white text-md mb-2"
          htmlFor={`daily-point-form-input-${reportType}`}
        >
          {title}
        </label>
      </Container>
      {reportsViewMode === ReportsViewMode.edit && (
        <Container className="mb-3">
          <InputButtonGroup
            inputValue={description}
            handleChange={(value) => {
              setDescription(value);
            }}
            onSubmit={handleAddReportItem}
            inputId={`daily-point-form-input-${reportType}`}
            inputPlaceholder={placeholder}
          />
        </Container>
      )}

      {reportsViewMode === ReportsViewMode.view && isEmpty(reportsList) && (
        <Container className="mb-3">
          <DotsHorizontalIcon className="text-white h-5" />
        </Container>
      )}

      <ul className="text-white text-sm list-none">
        {reportsList.map((reportItem) => (
          <ReportItem key={reportItem.id} reportItem={reportItem} />
        ))}
      </ul>
    </div>
  );
};

export default DailyPointForm;
