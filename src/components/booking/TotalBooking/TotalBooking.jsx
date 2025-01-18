import TotalBookingContent from "./TotalBookingContent";
import TotalBookingSkeleton from "./TotalBookingSkeleton";
import { useGetBooking } from "../../../hooks/useGetBooking";
import ErrorDisplay from "../../ErrorDisplay";
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
      {data?.map((bookings) => (
        <TotalBookingContent
          key={bookings.id}
          appointment={"Appointment Statistics"}
          cancellation={"Cancellations: 5%"}
          month={"This Month"}
          noShow={"No-shows: 10%"}
          total={data.length}
        />
      ))}
    </>
  );
}

export default TotalBooking;
