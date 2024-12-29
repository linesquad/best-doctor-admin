import { useState } from "react";

import DoctorLogo from "../../public/images/doctorLogo.jpg";
import MenuLogo from "../../public/images/menu.png";
import useAddServices from "../hooks/useAddServices";
import { useGetServices } from "../hooks/useGetServices";

function ServiceCard() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { data, isLoading, error, isError } = useGetServices();
  const { addServicesInfo } = useAddServices();

  const handleAddClick = () => {
    setShowInput(!showInput); 
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const submitServiceAdd = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      alert("Please enter a valid service title.");
      return;
    }

    try {
      await addServicesInfo({ title: inputValue });
      setInputValue(""); 
      setShowInput(false);
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  const services = data?.services || [];

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
    <div className="mt-20">
      <div className="flex justify-end pr-10">
        {showInput && (
          <form onSubmit={submitServiceAdd} className="flex items-center space-x-2">
            <input
              type="text"
              name="title"
              placeholder="Enter service title"
              value={inputValue}
              onChange={handleInputChange}
              className="border rounded px-2 py-1"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
              Add
            </button>
          </form>
        )}
        {!showInput && (
          <button
            onClick={handleAddClick}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Add Service
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 gap-20 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
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
    </div>
  );
}

export default ServiceCard;
