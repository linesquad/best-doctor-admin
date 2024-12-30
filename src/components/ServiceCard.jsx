import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import DoctorLogo from "../../public/images/doctorLogo.jpg";
import useAddServices from "../hooks/useAddServices";
import { useGetServices } from "../hooks/useGetServices";
import supabase from "../service/supabase";

function ServiceCard() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const { data, isLoading, isError, error } = useGetServices();
  const { addServicesInfo } = useAddServices();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error("No file selected.");
      return;
    }
    setSelectedFile(file);
  };

  const uploadImageToSupabase = async (file) => {
    if (!file) return null;

    const imageName = `${uuidv4()}_${file.name}`;
    const { data, error } = await supabase.storage
      .from("doctor_gallery")
      .upload(imageName, file);

    if (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image.");
      return null;
    }

    const imageUrl = `https://jytdvqchyfkzcbaelgcf.supabase.co/storage/v1/object/public/doctor_gallery/${data.path}`;
    return imageUrl;
  };

  const submitServiceAdd = async (e) => {
    e.preventDefault();

    const trimmedTitle = inputValue.trim();

    if (!trimmedTitle && !selectedFile) {
      toast.error("Please provide a service title and an image.");
      return;
    }

    if (!trimmedTitle) {
      toast.error("Please enter a valid service title.");
      return;
    }

    if (!selectedFile) {
      toast.error("Please upload an image for the service.");
      return;
    }

    let imageUrl = null;
    if (selectedFile) {
      imageUrl = await uploadImageToSupabase(selectedFile);
    }

    if (!imageUrl) {
      toast.error("Image upload failed. Please try again.");
      return;
    }

    try {
      await addServicesInfo({ title: trimmedTitle, image: imageUrl });
      setInputValue("");
      setSelectedFile(null);
      setShowInput(false);
    } catch (error) {
      console.error("Error adding service:", error);
      toast.error("Failed to add service.");
    }
  };

  const handleAddClick = () => {
    setShowInput(!showInput);
  };

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="mt-20">
      <div className="flex justify-end pr-4">
        {showInput && (
          <form onSubmit={submitServiceAdd} className="flex flex-col space-y-2 items-start">
            <input
              type="text"
              name="title"
              placeholder="Enter service title"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border rounded px-2 py-1"
            />
            <div className="flex items-center ">
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
              <button
                type="button"
                onClick={handleFileUploadClick}
                className="bg-gray-200 text-black px-2 py-1 rounded"
              >
                Upload Image
              </button>
              {selectedFile && <p>{selectedFile.name}</p>}
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
              Add Service
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
        {data?.services?.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center rounded-lg p-4 shadow-custom-light relative"
          >
            <img
              src={service.image || DoctorLogo}
              alt="Service"
              className="w-full h-[14rem] rounded-lg mb-2 cursor-pointer"
            />
            <p className="text-xl font-medium text-lightBlue cursor-pointer">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
