import BookingServiceCards from "../components/booking/BookingServiceCard/BookingServiceCards";
import ChartDisplay from "../components/booking/chart/ChartDisplay";
import MetricCardsDisplay from "../components/booking/MetricsCards/MetricCardsDisplay";
import TodaysAppointments from "../components/booking/TodayAppointments/TodaysAppointments";
import TotalBooking from "../components/booking/TotalBooking/TotalBooking";
import HomeCarousel from "../components/home/Carousel/HomeCarousel";
function Booking() {
  return (
    <div className="lg:px-[94px]">
      <TotalBooking />
      <BookingServiceCards />
      <TodaysAppointments />
   
      <MetricCardsDisplay />
      <ChartDisplay />
      <HomeCarousel />
    </div>
  );
}

export default Booking;
