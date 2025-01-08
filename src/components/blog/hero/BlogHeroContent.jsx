import { useState } from "react";
import Modal from "../../Modal";
import { uploadImageToSupabase } from "../../../service/uploadImageSupa";
import usePostHeroImage from "../../../hooks/usePostHeroImage";
import BlogHeroModalContent from "./BlogHeroModalContent";
function BlogHeroContent({ blogHeroImg, blogHeroTitle, BlogHeroSubTitle, id }) {
  const { mutate } = usePostHeroImage();
  const [modalToggle, setModalToggle] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

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
      toast.error("Failed to upload image.");
      return;
    }

    mutate({
      top_pic: imageUrl,
      id,
    });
    setModalToggle(false);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${blogHeroImg})`,
      }}
      className={`bg-no-repeat bg-cover bg-center min-h-[390px] 
   flex items-center max-w-full sm:min-h-[557px] lg:min-h-screen relative`}
    >
      <div className="absolute top-4 right-4">
        <img
          src="/images/dots.png"
          alt="dots"
          className="w-10 h-10 cursor-pointer object-cover object-center"
          onClick={handleModalOpen}
        />
        {modalToggle && (
          <Modal>
            <BlogHeroModalContent
              handleFormData={handleFormData}
              handleImageChange={handleImageChange}
              handleModalOpen={handleModalOpen}
            />
          </Modal>
        )}
      </div>
      <div className="flex flex-col justify-end gap-3 px-[36px] h-full">
        <h1 className="text-white font-poppinsRegular text-[48px] leading-[40px]">
          {blogHeroTitle}
        </h1>
        <h3 className="text-white font-heeboRegular text-[24px] leading-[24px]">
          {BlogHeroSubTitle}
        </h3>
      </div>
    </div>
  );
}

export default BlogHeroContent;
