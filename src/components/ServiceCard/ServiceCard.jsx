import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import ServiceGrid from "./ServiceGrid";
import ServiceInputForm from "./ServiceInputForm";
import useAddServices from "../../hooks/useAddServices";
import { useDeleteServices } from "../../hooks/useDeleteServices";
import { useGetServices } from "../../hooks/useGetServices";
import supabase from "../../service/supabase";

function ServiceCard() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [openModalId, setOpenModalId] = useState(null);
  const fileInputRef = useRef(null);

  const { data, isLoading, isError, error } = useGetServices();
  const { addServicesInfo } = useAddServices();
  const { mutate: deleteServices } = useDeleteServices();

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
    return `https://jytdvqchyfkzcbaelgcf.supabase.co/storage/v1/object/public/doctor_gallery/${data.path}`;
  };

  const submitServiceAdd = async (e) => {
    e.preventDefault();
    const trimmedTitle = inputValue.trim();

    if (!trimmedTitle || !selectedFile) {
      toast.error("Please provide a service title and an image.");
      return;
    }

    const imageUrl = await uploadImageToSupabase(selectedFile);
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

  const handleDelete = (id) => {
    deleteServices(id);
  };

  if (isLoading) return <p>Loading...</p>;
  // here we need skeleton
  if (isError) return <p>{error.message}</p>;

  return (
    <div className="mt-20">
      <ServiceInputForm
        showInput={showInput}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleFileChange={handleFileChange}
        handleFileUploadClick={() => fileInputRef.current?.click()}
        selectedFile={selectedFile}
        submitServiceAdd={submitServiceAdd}
        handleAddClick={() => setShowInput(!showInput)}
        fileInputRef={fileInputRef}
      />
      <ServiceGrid
        services={data.services}
        openModalId={openModalId}
        toggleModal={setOpenModalId}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default ServiceCard;
