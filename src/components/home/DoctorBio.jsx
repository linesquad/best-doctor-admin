import { useState } from "react";
import MainContantWrapper from "../MainContentWrapper";
import DoctorBioToggleMenu from "./DoctorBioToggleMenu";
import useGetDoctorBio from "../../hooks/useGetDoctorBio";
import useGetDoctorImage from "../../hooks/useGetDoctorImage";
function DoctorBio() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isError } = useGetDoctorBio();
  const {
    data: doctorImage,
    isLoading: ImageLoading,
    isError: ImageError,
  } = useGetDoctorImage();
  console.log(doctorImage, "oos");
  // this function opens and closes toggle menu
  function handleToggle() {
    setIsOpen((prev) => !prev);
  }
  if (isLoading || ImageLoading) return <div>Loading...</div>;
  if (isError || ImageError) return <div>Error...</div>;

  return (
    <MainContantWrapper>
      <div className="grid grid-cols-1 ">
        {doctorImage?.map((asset) => (
          <div
            key={asset.id}
            className="bg-pastelBlue w-[275px] max-w-full min-h-[289px] justify-self-end relative  sm:w-[498px] sm:min-h-[521px]
         md:w-[573px] md:min-h-[631px] lg:w-[725px] lg:min-h-[750px]"
          >
            <div>
              <img
                src="/images/dots.png"
                alt="dots"
                onClick={handleToggle}
                className="w-[25px] h-[25px] cursor-pointer absolute right-2 top-2"
              />
            </div>
            <div>
              <img
                src={asset.middle_pic}
                alt="doc"
                className="absolute -left-32 top-8 w-[172px] max-w-full min-h-[234px] rounded-lg hidden mediumSm:block 
               sm:w-[275px] sm:min-h-[358px] sm:top-20 md:w-[344px] md:min-h-[459px] md:-left-56 lg:w-[355px] lg:min-h-[525px] "
              />
            </div>
            <div className="flex justify-center items-center h-full">
              {data?.map((info) => (
                <div className="flex flex-col gap-[6px]" key={info.id}>
                  <div className="right-5 top-9 absolute">
                    <DoctorBioToggleMenu
                      isOpen={isOpen}
                      id={info.id}
                      docId={asset.id}
                    />
                  </div>
                  <h1 className="font-poppinsBold text-[#000] text-[20px] md:text-[40px] leading-10">
                    {info.fullname}
                  </h1>
                  <h3 className="text-oceanBlue text-[12px] md:text-[26px] leading-normal font-poppinsRegular">
                    {info.status}
                  </h3>
                  <h5 className="text-oceanBlue text-[6px] md:text-[18px] leading-normal font-poppinsRegular">
                    {info.degree}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MainContantWrapper>
  );
}

export default DoctorBio;
