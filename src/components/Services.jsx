import ReusableTitle from "./ReusableTitle";
import ServiceCard from "./ServiceCard/ServiceCard";


function Services() {

  return (
    <div className="flex flex-col ">
      <div className="mx-auto w-fit">
        <ReusableTitle
          title={"Services For My Patients"}
          size={"text-[3rem]"}
          color={"text-black"}
          fontWeight={"font-bold"}
        />
      </div>
      <ServiceCard />
    </div>
  );
}

export default Services;
