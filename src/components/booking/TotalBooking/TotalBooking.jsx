import TotalBookingContent from "./TotalBookingContent";
import TotalBookingSkeleton from "./TotalBookingSkeleton";
import { useGetBooking } from "../../../hooks/useBooking/useGetBooking";
import ErrorDisplay from "../../ErrorDisplay/ErrorDisplay";
function TotalBooking() {
  const { data, isError, isLoading, error } = useGetBooking();
  if (isLoading) {
    return <TotalBookingSkeleton />;
  }
  if (isError) {
    return <ErrorDisplay errorMsg={error.message} />;
  }
  return (
    <>
      <TotalBookingContent
        appointment={"Appointment Statistics"}
        month={"This Month"}
        total={data.length}
      />
    </>
  );
}

export default TotalBooking;
