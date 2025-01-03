import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import HomeContent from "./HeroContent";
import useGetHero from "../../hooks/useGetHero";
import apiGetHeroImage from "../../hooks/useGetHeroImage";
import usePostHeroImage from "../../hooks/usePostHeroImage";
import supabase from "../../service/supabase";
import ErrorDisplay from "../ErrorDisplay";
import HeroSkeleton from "../skeletons/HeroSkeleton";

function HomeHero() {
  const { data, isLoading, isError, error } = useGetHero();
  const fileInputRef = useRef(null);
  const { mutate } = usePostHeroImage();
  const [selectedId, setSelectedId] = useState(null);

  const {
    data: heroImage,
    isLoading: heroImageLoading,
    isError: heroImageError,
  } = apiGetHeroImage();

  // im updating the image and pushing it in the storage
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error("No file selected.");
      return;
    }

    if (!selectedId) {
      toast.error("No item selected for updating.");
      return;
    }

    const imageName = `${uuidv4()}_${file.name}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("doctor_gallery")
      .upload(imageName, file);

    if (uploadError) {
      console.error("Error uploading image:", uploadError);
      toast.error("Failed to upload image.");
      return;
    }

    const top_pic = `https://jytdvqchyfkzcbaelgcf.supabase.co/storage/v1/object/public/doctor_gallery/${uploadData.path}`;
    toast.success("Image uploaded successfully.");

    mutate({ top_pic: top_pic, id: selectedId });
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  if (isLoading || heroImageLoading) return <HeroSkeleton />;
  if (isError || heroImageError)
    return <ErrorDisplay errorMsg={error.message} />;

  return (
    <section>
      {heroImage.map((images) => (
        <div
          key={images.id}
          onClick={() => setSelectedId(images.id)}
          style={{
            backgroundImage: `url(${images.top_pic})`,
          }}
          className={`bg-no-repeat bg-cover bg-center min-h-[390px] 
            flex items-center max-w-full sm:min-h-[557px] lg:min-h-screen relative`}
        >
          <div className=" pl-[37px] md:pl-[123px] lg:pl-[212px]">
            {data.map((items) => (
              <div key={items.id}>
                <HomeContent
                  subHeading={items.sub_heading}
                  mainHeading={items.main_heading}
                  fileChangeFunction={handleFileChange}
                  fileInputRef={fileInputRef}
                  handleClickFunction={handleClick}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default HomeHero;
