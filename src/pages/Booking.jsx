import AppointmentRequestsCards from "../components/booking/AppointmentRequest/AppointmentRequestCards";
import BookingServiceCards from "../components/booking/BookingServiceCard/BookingServiceCards";
import TodaysAppointments from "../components/booking/TodayAppointments/TodaysAppointments";
import TotalBooking from "../components/booking/TotalBooking/TotalBooking";
import HomeCarousel from "../components/home/Carousel/HomeCarousel";
function Booking() {
  return (
    <div className="lg:px-[94px]">
      <TotalBooking />
      <BookingServiceCards />
      <TodaysAppointments />
      <AppointmentRequestsCards />
      <HomeCarousel />
    </div>
  );
}

export default Booking;
