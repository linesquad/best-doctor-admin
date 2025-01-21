import ApoointmentBookingContent from "./ApointmentBookingContent";
import NewBookingSkeleton from "./NewBookingSkeleton";
import { useGetBooking } from "../../../hooks/useGetBooking";
import ErrorDisplay from "../../ErrorDisplay";

function AppointmentNewBooking() {
  const { data: bookingData, isLoading, isError, error } = useGetBooking();
  if (isLoading) return <NewBookingSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;
  return (
    <div className="mb-10">
      <ApoointmentBookingContent
        number={bookingData.length}
        title={"New Bookings"}
        subtitle={"Check your title"}
      />
    </div>
  );
}

export default AppointmentNewBooking;
