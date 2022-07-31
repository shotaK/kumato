import Container from "Components/Shared/Layout/Container";
import DailyPointForm from "Components/Daily/DailyPointForm";
import { DailyReportType } from "Domain/Daily/Types";
import {
  accomplishedReportsListSelector,
  blockedReportsListSelector,
  pendingReportsListSelector,
} from "Domain/Daily/DailySelectors";
import { useAppSelector } from "Domain/Hooks";
import ViewButton from "Components/Daily/ViewButton";
import QuestionTooltip from "Components/Shared/Tooltip/QuestionTooltip";

const Index = () => {
  const accomplishedReportsList = useAppSelector(
    accomplishedReportsListSelector
  );
  const pendingReportsList = useAppSelector(pendingReportsListSelector);
  const blockedReportsList = useAppSelector(blockedReportsListSelector);

  return (
    <>
      <Container className="flex justify-between items-center mb-6">
        <h3 className="flex items-center text-white text-lg leading-none">
          <span className="pr-1">Daily Standup</span>
          <QuestionTooltip
            overlayText='Each project has its own daily standup data.
           If you would like to view another project&rsquo;s daily standup data, switch the project from the "Todo" tab.'
          />
        </h3>

        <ViewButton />
      </Container>

      <DailyPointForm
        title="What did you do since the last check-in?"
        reportType={DailyReportType.accomplished}
        reportsList={accomplishedReportsList}
      />

      <DailyPointForm
        title="What are gonna do next?"
        reportType={DailyReportType.upcoming}
        reportsList={pendingReportsList}
      />

      <DailyPointForm
        title="Is anything blocking your progress?"
        reportType={DailyReportType.blocked}
        reportsList={blockedReportsList}
      />
    </>
  );
};

export default Index;
