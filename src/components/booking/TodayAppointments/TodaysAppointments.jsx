import AppointmentCardSkeleton from "./AppointmentCardSkeleton";
import AppointmentsCard from "./AppointmentsCard";
import { useGetBookingsByDate } from "../../../hooks/useBooking/useGetBookingByDate";
import ErrorDisplay from "../../ErrorDisplay/ErrorDisplay";
import ReusableTitle from "../../ReusableTitle";
function TodaysAppointments() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); 
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  const { data: bookingData, isLoading, isError, error } = useGetBookingsByDate(formattedDate);

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
        {bookingData.map((booking) => (
          <AppointmentsCard
            id={booking.id}
            key={booking.id}
            Name={booking.user_name}
            condition={booking.condition}
            age={booking.age}
            timeId={booking.avaliable_time}
          />
        ))}
      </div>
    </div>
  );
}

export default TodaysAppointments;
