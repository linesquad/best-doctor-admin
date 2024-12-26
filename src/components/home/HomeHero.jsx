import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import supabase from "../../service/supabase";
import HeroSkeleton from "../skeletons/HeroSkeleton";
import ErrorDisplay from "../ErrorDisplay";
import useGetHero from "../../hooks/useGetHero";
import CustomButton from "../../ui/CustomButton";
import usePostHeroImage from "../../hooks/usePostHeroImage";
function HomeHero() {
  const { data, isLoading, isError, error } = useGetHero();
  const fileInputRef = useRef(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const { mutate } = usePostHeroImage();
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error("No file selected.");
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

    const imageUrl = `https://your-supabase-instance.supabase.co/storage/v1/object/public/doctor_gallery/${uploadData.path}`;
    setUploadedImageUrl(imageUrl);
    toast.success("Image uploaded successfully.");

    mutate({ imageUrl });
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };
  if (isLoading) return <HeroSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;
  return (
    <section>
      <div
        className={`bg-[url('/images/hero.png')] bg-no-repeat bg-cover bg-center min-h-[390px] 
            flex items-center max-w-full sm:min-h-[557px] lg:min-h-screen relative`}
      >
        <div className=" pl-[37px] md:pl-[123px] lg:pl-[212px]">
          {data?.map((items) => (
            <div key={items.id} className="flex flex-col gap-2 md:gap-4">
              <h1
                className="font-poppinsBold leading-[40px] z-10  text-[32px] lg:text-[80px]  lg:leading-[110px] capitalize
                text-transparent bg-gradient-to-b from-[#07D] to-[#004077] bg-clip-text"
              >
                {items.main_heading}
              </h1>
              <h3 className="text-white font-poppinsRegular leading-[25px] text-[16px] lg:text-[36px] lg:leading-[35px] capitalize ">
                {items.sub_heading}
              </h3>
              <CustomButton
                name={"BOOK APPOINTMENT"}
                color={"text-white"}
                bg={"bg-[#004682]"}
                width={"w-fit"}
                paddingX={"px-[14px]"}
                paddingY={"py-[16px]"}
                textSize={"text-[10px]"}
                font={"font-robotoBold"}
                weight={"font-bold"}
                rounded={"rounded-[8px]"}
              />
            </div>
          ))}
          <div className="z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
            <img
              src="./images/upload.svg"
              alt="upload"
              className="cursor-pointer lg:w-[125px]"
              onClick={handleClick}
            />
            <p
              className="font-heeboRegular hidden lg:flex text-[36px] text-[#21243D] 
                cursor-pointer bg-[#CBDEEF80] px-[15px] py-[8px]"
              onClick={handleClick}
            >
              Upload New Picture
            </p>
          </div>
          {uploadedImageUrl && (
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center">
              <img
                src={uploadedImageUrl}
                alt="Uploaded"
                className="max-w-[200px] mx-auto"
              />
              <p className="text-white mt-2">Uploaded Successfully</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
