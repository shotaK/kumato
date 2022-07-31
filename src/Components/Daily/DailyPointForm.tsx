import Container from "Components/Shared/Layout/Container";
import InputButtonGroup from "Components/Shared/Input/InputButtonGroup";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { ReactNode, useState } from "react";
import {
  DailyReportItem,
  DailyReportType,
  ReportsViewMode,
} from "Domain/Daily/Types";
import { useAppDispatch } from "Domain/Hooks";
import { addReportItem } from "Domain/Daily/DailySlice";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { dailySelector } from "Domain/Daily/DailySelectors";
import isEmpty from "lodash.isempty";
import ReportItem from "Components/Daily/ReportItem";

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
  const { reportsViewMode } = useSelector(dailySelector);

  const [description, setDescription] = useState("");

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
      {reportsViewMode === ReportsViewMode.edit && (
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
