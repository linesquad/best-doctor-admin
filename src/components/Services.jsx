import ReusableTitle from "./ReusableTitle";
import DoctorLogo from "../../public/images/doctorLogo.jpg";
import MenuLogo from "../../public/images/menu.png";
import { useGetServices } from "../hooks/useGetServices";

function Services() {
  const { data, isLoading, error, isError } = useGetServices();

  console.log(data);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div className="flex flex-col gap-20">
      <div className="mx-auto w-fit">
        <ReusableTitle
          title={"Services For My Patients"}
          size={"text-[3rem]"}
          color={"text-black"}
          fontWeight={"font-bold"}
        />
      </div>
      <div className="grid grid-cols-1 gap-20 p-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center  rounded-lg p-4 shadow-custom-light relative"
          >
            <img
              src={DoctorLogo}
              alt="Service"
              className="w-24 h-auto mb-2 cursor-pointer"
            />
            <img
              src={MenuLogo}
              alt="Dots"
              className="w-10 absolute right-0 cursor-pointer"
            />

            <p className="text-lg font-medium text-lightBlue cursor-pointer">
              Service
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
