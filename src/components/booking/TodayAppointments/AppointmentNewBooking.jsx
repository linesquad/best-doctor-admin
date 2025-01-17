import ApoointmentBookingContent from "./ApointmentBookingContent";
function AppointmentNewBooking() {
  return (
    <div>
      {Array.from({ length: 2 }).map((_, i) => (
        <ApoointmentBookingContent
          key={i}
          number={3}
          title={"New Bookings"}
          subtitle={"Check your title"}
        />
      ))}
    </div>
  );
}

export default AppointmentNewBooking;
