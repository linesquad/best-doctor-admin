import { useState, useRef } from "react";
import { toast } from "react-toastify";

import ServiceGrid from "./ServiceGrid";
import ServiceInputForm from "./ServiceInputForm";
import ServiceSkeleton from "./ServiceSkeleton";
import useAddServices from "../../hooks/useAddServices";
import { useDeleteServices } from "../../hooks/useDeleteServices";
import { useGetServices } from "../../hooks/useGetServices";
import { uploadImageToSupabase } from "../../service/uploadImageSupa";

function ServiceCard() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [addContent, setAddContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [openModalId, setOpenModalId] = useState(null);
  const fileInputRef = useRef(null);

  const { data, isLoading, isError, error } = useGetServices();
  const { addServicesInfo, isPending } = useAddServices();
  const { mutate: deleteServices } = useDeleteServices();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error("No file selected.");
      return;
    }
    setSelectedFile(file);
  };

  const submitServiceAdd = async (e) => {
    e.preventDefault();
    const trimmedTitle = inputValue.trim();
    const trimmedContent = addContent.trim();

    if (!trimmedTitle || !selectedFile || !trimmedContent) {
      toast.error("Please provide a service title, content and an image.");
      return;
    }

    const imageUrl = await uploadImageToSupabase(selectedFile);
    if (!imageUrl) {
      toast.error("Image upload failed. Please try again.");
      return;
    }

    try {
      await addServicesInfo({ title: trimmedTitle, image: imageUrl, content: trimmedContent});
      setInputValue("");
      setAddContent("")
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

  if (isLoading) return <ServiceSkeleton />;
  if (isError) return <p>{error.message}</p>;

  return (
    <div className="mt-20">
      <ServiceInputForm
        showInput={showInput}
        setShowInput={setShowInput}
        inputValue={inputValue}
        setInputValue={setInputValue}
        addContent={addContent}
        setAddContent={setAddContent}
        handleFileChange={handleFileChange}
        handleFileUploadClick={() => fileInputRef.current?.click()}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        submitServiceAdd={submitServiceAdd}
        handleAddClick={() => setShowInput(!showInput)}
        fileInputRef={fileInputRef}
        isPending={isPending}
      />
      <ServiceGrid
        isLoading={isLoading}
        services={data.services}
        openModalId={openModalId}
        toggleModal={setOpenModalId}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default ServiceCard;
