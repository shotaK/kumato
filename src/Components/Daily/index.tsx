import Container from "Components/Shared/Layout/Container";
import DailyPointForm from "Components/Daily/DailyPointForm";
import { DailyReportType } from "Domain/Daily/Types";
import {
  accomplishedReportsListSelector,
  blockedReportsListSelector,
  pendingReportsListSelector,
} from "Domain/Daily/DailySelectors";
import { useAppSelector } from "Domain/Hooks";

const Index = () => {
  const accomplishedReportsList = useAppSelector(
    accomplishedReportsListSelector
  );
  const pendingReportsList = useAppSelector(pendingReportsListSelector);
  const blockedReportsList = useAppSelector(blockedReportsListSelector);

  return (
    <>
      <Container>
        <h3 className="text-white text-lg mb-4">Daily Standup</h3>
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
