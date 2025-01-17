import AppointmentsCard from "./AppointmentsCard";
import ReusableTitle from "../../ReusableTitle";
import AppointmentNewBooking from "./AppointmentNewBooking";
function TodaysAppointments() {
  return (
    <div>
      <ReusableTitle
        color={"#101012"}
        fontWeight={"font-poppinsRegular"}
        size={"text-[64px]"}
        title={"Today's Appointment "}
      />
      <div className="my-5 flex flex-col gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <AppointmentsCard
            key={i}
            Name={"Tornike Butiashvili"}
            time={"3:00 PM - 3:30 PM, Type: Video Call"}
            condition={"Common Cold"}
            age={22}
            Prescription={"Paracetamol"}
          />
        ))}
      </div>
      <AppointmentNewBooking />
    </div>
  );
}

export default TodaysAppointments;
