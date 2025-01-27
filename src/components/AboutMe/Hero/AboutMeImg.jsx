import { useState } from "react";
import { toast } from "react-toastify";

import AboutMeHeroModalContent from "./AboutMeHeroModalContent";
import useUpdateAboutMeHero from "../../../hooks/useUpdateAboutMeHero";
import { uploadImageToSupabase } from "../../../service/uploadImageSupa";
import Modal from "../../Modal";

function AboutMeImg({ dataHeroImg, id }) {
  const { mutate } = useUpdateAboutMeHero();
  const [modalToggle, setModalToggle] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
console.log(dataHeroImg);

  function handleModalOpen() {
    setModalToggle((prev) => !prev);
  }

  const handleFormData = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select a file to upload!");
      return;
    }

    let imageUrl;
    try {
      imageUrl = await uploadImageToSupabase(selectedFile);
      if (!imageUrl) {
        toast.error("Image upload failed. Please try again.");
        return;
      }
    } catch (error) {
      toast.error(error.message);
      return;
    }

    // Call mutation to update the about me hero image
    mutate({
      image: imageUrl,
      id,
    });
    setModalToggle(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  // Handle invalid background image URL
  const backgroundImageStyle = dataHeroImg
    ? { backgroundImage: `url(${dataHeroImg})` }
    : { backgroundColor: "#e0e0e0" };

  return (
    <div
      style={backgroundImageStyle}
      className={`bg-no-repeat bg-cover bg-center min-h-[390px]
      flex items-center max-w-full sm:min-h-[557px] lg:min-h-screen relative mt-[50px]`}
    >
      <div className="absolute top-4 right-4">
        <button
          onClick={handleModalOpen}
          aria-label="Edit about me image"
          className="w-10 h-10 cursor-pointer"
        >
          <img
            src="/images/dots.png"
            alt="dots"
            className="w-10 h-10 object-cover object-center"
          />
        </button>
        {modalToggle && (
          <Modal>
            <AboutMeHeroModalContent
              handleFormData={handleFormData}
              handleImageChange={handleImageChange}
              handleModalOpen={handleModalOpen}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default AboutMeImg;
