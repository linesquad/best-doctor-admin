import AppointmentCardSkeleton from "./AppointmentCardSkeleton";

import AppointmentsCard from "./AppointmentsCard";
import { useGetBooking } from "../../../hooks/useGetBooking";
import ErrorDisplay from "../../ErrorDisplay";
import ReusableTitle from "../../ReusableTitle";
function TodaysAppointments() {
  const { data: bookingData, isLoading, isError, error } = useGetBooking();

  if (isLoading) return <AppointmentCardSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;
  return (
    <div className="my-32">
      <ReusableTitle
        color={"#101012"}
        fontWeight={"font-poppinsRegular"}
        size={"text-[24px] sm:text-[64px]"}
        title={"Today's Appointment "}
      />
      <div className="my-5 flex flex-col gap-8">
        {bookingData.slice(0, 3).map((booking) => (
          <AppointmentsCard
            key={booking.id}
            Name={booking.user_name}
            startTime={booking.start_time}
            endTime={booking.end_time}
            condition={booking.condition}
            age={booking.age}
            Prescription={booking.prescription}
          />
        ))}
      </div>
    </div>
  );
}

export default TodaysAppointments;
