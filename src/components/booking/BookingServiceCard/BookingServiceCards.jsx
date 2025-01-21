import BookingServiceContent from "./BookingServiceContent";
import { useGetBooking } from "../../../hooks/useGetBooking";
import ServiceSkeleton from "../../../components/ServiceCard/ServiceSkeleton";
import ErrorDisplay from "../../ErrorDisplay";
function BookingServiceCards() {
  const { data, isLoading, isError, error } = useGetBooking();
  if (isLoading) return <ServiceSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;

  return (
    <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 place-items-center sm:place-items-start ">
      {data.map((services) => (
        <BookingServiceContent
          key={services.id}
          id={services.id}
          count={5}
          image={"./images/newbooking.svg"}
          status={services.condition}
          type={services.prescription}
        />
      ))}
    </div>
  );
}

export default BookingServiceCards;
