import AppointmentCardContent from "./AppointmentCardContent";
import ReusableTitle from "../../ReusableTitle";

function AppointmentRequestsCards() {
  return (
    <div className="flex flex-col gap-8 my-24">
      <ReusableTitle
        color={"#101012"}
        fontWeight={"font-poppinsRegular"}
        size={"text-[64px]"}
        title={"Today's Appointment Request"}
      />
      {Array.from({ length: 2 }).map((_, index) => (
        <AppointmentCardContent
          key={index}
          Name={"Donald Trump"}
          time={"3:00 PM - 3:30 PM, Type: Video Call"}
          condition={"Common Cold"}
          age={"641"}
          Prescription={"Paracetamol"}
        />
      ))}
    </div>
  );
}

export default AppointmentRequestsCards;
