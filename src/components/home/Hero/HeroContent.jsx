function HeroContent({
  mainHeading,
  fileChangeFunction,
  fileInputRef,
  handleClickFunction,
  file,
  updateHeroImage,
  id,
  mutateImage,
  picture,
}) {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <h1
        className="font-poppinsBold leading-[40px] z-[1]   text-[32px] lg:text-[80px]  lg:leading-[110px] capitalize
  text-transparent bg-gradient-to-b from-[#07D] to-[#004077] bg-clip-text"
      >
        {mainHeading}
      </h1>
      <div className="z-[2] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={(e) => fileChangeFunction(e)}
        />
        <img
          src="/images/upload.svg"
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
        <button
          onClick={() => mutateImage(file, updateHeroImage, id, picture)}
          className="border border-[#ccc] bg-[#CBDEEF80] px-5 py-3 mt-2 text-black"
        >
          Update Image
        </button>
      </div>
    </div>
  );
}

export default HeroContent;
