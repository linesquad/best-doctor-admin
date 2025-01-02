import CustomButton from "../../ui/CustomButton";
function HeroContent({
  
  mainHeading,
  subHeading,
  fileChangeFunction,
  fileInputRef,
  handleClickFunction,
}) {
  return (
    <div  className="flex flex-col gap-2 md:gap-4 cursor-pointer">
      <h1
        className="font-poppinsBold leading-[40px] z-10  text-[32px] lg:text-[80px]  lg:leading-[110px] capitalize
  text-transparent bg-gradient-to-b from-[#07D] to-[#004077] bg-clip-text"
      >
        {mainHeading}
      </h1>
      <h3 className="text-white font-poppinsRegular leading-[25px] text-[16px] lg:text-[36px] lg:leading-[35px] capitalize ">
        {subHeading}
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

      <div className="z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={fileChangeFunction}
        />
        <img
          src="./images/upload.svg"
          alt="upload"
          className="cursor-pointer lg:w-[125px]"
          onClick={handleClickFunction}
        />
        <p
          className="font-heeboRegular hidden lg:flex text-[36px] text-[#21243D] 
  cursor-pointer bg-[#CBDEEF80] px-[15px] py-[8px]"
          onClick={handleClickFunction}
        >
          Upload New Picture
        </p>
      </div>
    </div>
  );
}

export default HeroContent;
