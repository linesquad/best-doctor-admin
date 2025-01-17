import TotalBookingContent from "./TotalBookingContent";

function TotalBooking() {
  return (
    <>
      <TotalBookingContent
        appointment={"Appointment Statistics"}
        cancellation={"Cancellations: 5%"}
        month={"This Month"}
        noShow={"No-shows: 10%"}
        total={"120"}
      />
    </>
  );
}

export default TotalBooking;
