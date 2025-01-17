function ApointmentBookingContent({ title, subtitle, number }) {
  return (
    <div className="bg-[#FDFEFD] rounded-[6px] shadow-custom-light p-8 relative mt-24">
      <div className="flex  justify-between ">
        <h1 className="text-[#101012] font-robotoMedium text-[32px]">
          {title}
        </h1>
        <h3 className="text-[#101012] font-heeboRegular text-[15px]">
          {subtitle}
        </h3>
        <div
          className="absolute -right-7 -top-8 bg-[#004682] w-[72px] h-[72px] 
      rounded-full flex justify-center items-center text-white text-[24px] font-robotoRegular"
        >
          {number}
        </div>
      </div>
      <div className="grid place-items-center  pt-5">
        <img
          src="./images/arrowDown.svg"
          alt="arrow"
          className="w-fit cursor-pointer"
        />
      </div>
    </div>
  );
}

export default ApointmentBookingContent;
