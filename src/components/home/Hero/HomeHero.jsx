import { useState, useRef } from "react";
import { toast } from "react-toastify";

import HomeContent from "./HeroContent";
import HeroSkeleton from "./HeroSkeleton";
import useGetHero from "../../../hooks/useHero/useGetHero";
import apiGetHeroImage from "../../../hooks/useHero/useGetHeroImage";
import usePostHeroImage from "../../../hooks/useHero/usePostHeroImage";
import { handleUploadImageTop } from "../../../service/uploadImageAndMutateSupa";
import ErrorDisplay from "../../ErrorDisplay/ErrorDisplay";
function HomeHero() {
  const { data, isLoading, isError, error } = useGetHero();
  const fileInputRef = useRef(null);
  const { mutate: updateHeroImage } = usePostHeroImage();
  const [selectedId, setSelectedId] = useState(null);
  const [file, setFile] = useState(null);

  const {
    data: heroImage,
    isLoading: heroImageLoading,
    isError: heroImageError,
  } = apiGetHeroImage();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      toast.error("No file selected.");
      return;
    }
    setFile(selectedFile);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };
  const top_pic = `${import.meta.env.VITE_SUPABASE_URL}${import.meta.env.VITE_SUPABASE_STORAGE_BUCKET_NAME}/`;
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
          <div className=" pl-[40px] ">
            {data.map((items) => (
              <div key={items.id}>
                <HomeContent
                  mainHeading={items.main_heading}
                  mutateImage={handleUploadImageTop}
                  fileChangeFunction={handleFileChange}
                  fileInputRef={fileInputRef}
                  handleClickFunction={handleClick}
                  file={file}
                  id={selectedId}
                  picture={top_pic}
                  updateHeroImage={updateHeroImage}
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
