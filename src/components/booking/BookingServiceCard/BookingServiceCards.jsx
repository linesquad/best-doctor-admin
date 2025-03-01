import BookingServiceContent from "./BookingServiceContent";
import ServiceSkeleton from "../../../components/ServiceCard/ServiceSkeleton";
import { useGetBooking } from "../../../hooks/useBooking/useGetBooking";
import ErrorDisplay from "../../ErrorDisplay/ErrorDisplay";
function BookingServiceCards() {
  const { data, isLoading, isError, error } = useGetBooking();
  if (isLoading) return <ServiceSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;

  return (
    <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 place-items-center sm:place-items-start ">
      {data.slice(0, 6).map((services) => (
        <BookingServiceContent
          key={services.id}
          id={services.id}
          image={"./images/newbooking.svg"}
          status={services.condition}
        />
      ))}
    </div>
  );
}

export default BookingServiceCards;
