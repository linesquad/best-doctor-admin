import BookingServiceCards from "../components/booking/BookingServiceCard/BookingServiceCards";
import TotalBooking from "../components/booking/TotalBooking/TotalBooking";

function Booking() {
  return (
    <div className="lg:px-[94px]">
      <TotalBooking />
      <BookingServiceCards />
    </div>
  );
}

export default Booking;
