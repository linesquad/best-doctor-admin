import DoctorLogo from "../../public/images/doctorLogo.jpg";
import MenuLogo from "../../public/images/menu.png";
import useAddServices from "../hooks/useAddServices";
import { useGetServices } from "../hooks/useGetServices";

function ServiceCard() {
  const { data, isLoading, error, isError } = useGetServices();
  const { addServicesInfo } = useAddServices();

  const submitServiceAdd = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formAction = Object.fromEntries(formData);

    try {
      addServicesInfo({
        title: formAction.title,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const services = data?.services || []; 
  
console.log(services)
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (!services.length) {
    return <p>No services available.</p>;
  }

  return (
    <>
      <form onSubmit={submitServiceAdd}>
        <input type="text" name="title" placeholder="title" />
        <button>add</button>
      </form>
      <div className="grid grid-cols-1 gap-20 p-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service) => (
          <div
            key={service.id} // Use unique id for key
            className="flex flex-col items-center rounded-lg p-4 shadow-custom-light relative"
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
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServiceCard;
