import BookingServiceContent from "./BookingServiceContent";
import { useGetServices } from "../../../hooks/useGetServices";
import ServiceSkeleton from "../../../components/ServiceCard/ServiceSkeleton";
import ErrorDisplay from "../../ErrorDisplay";
function BookingServiceCards() {
  const { data, isLoading, isError, error } = useGetServices();
  if (isLoading) return <ServiceSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;
  console.log(data);
  return (
    <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 place-items-center sm:place-items-start ">
      {data.services.map((services) => (
        <BookingServiceContent
          key={services.id}
          count={5}
          image={"./images/newbooking.svg"}
          status={services.title.slice(0, 15) + "..."}
          type={services.content.slice(0, 30) + "..."}
        />
      ))}
    </div>
  );
}

export default BookingServiceCards;
