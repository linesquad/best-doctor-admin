import ReusableTitle from "../ReusableTitle";
import ChartDisplay from "../booking/chart/ChartDisplay";
import TrendAppointments from "./TrendAppointments";
function TrendDisplay() {
  return (
    <div className="">
      <ReusableTitle
        color={"text-[#000]"}
        fontWeight={"font-poppinsBold"}
        size={"text-[38px] md:text-[64px]"}
        title={"Patient trend over months"}
      />
      <ChartDisplay />
      <TrendAppointments />
    </div>
  );
}

export default TrendDisplay;
