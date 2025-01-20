import { useGetBooking } from "../../../hooks/useGetBooking";
import ErrorDisplay from "../../ErrorDisplay";
import ApoointmentBookingContent from "./ApointmentBookingContent";
import NewBookingSkeleton from "./NewBookingSkeleton";

function AppointmentNewBooking() {
  const { data: bookingData, isLoading, isError, error } = useGetBooking();
  if (isLoading) return <NewBookingSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;
  return (
    <div>
      <ApoointmentBookingContent
        number={bookingData.length}
        title={"New Bookings"}
        subtitle={"Check your title"}
      />
    </div>
  );
}

export default AppointmentNewBooking;
