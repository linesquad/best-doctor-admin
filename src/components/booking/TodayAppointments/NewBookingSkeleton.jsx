function NewBookingSkeleton() {
  return (
    <div className="bg-[#FDFEFD] rounded-[6px] shadow-custom-light p-8 relative mt-24 animate-pulse">
      <div className="flex justify-between">
        <div className="bg-[#E0E0E0] h-[32px] w-[40%] rounded-md"></div>
        <div className="bg-[#E0E0E0] h-[15px] w-[30%] rounded-md"></div>
        <div
          className="absolute right-0 top-[-20px] md:right-[-7px] md:top-[-16px] bg-[#E0E0E0] w-[50px] h-[50px] 
          rounded-full flex justify-center items-center"
        ></div>
      </div>
      <div className="grid place-items-center pt-5">
        <div className="bg-[#E0E0E0] w-[20px] h-[20px] rounded-md"></div>
      </div>
    </div>
  );
}

export default NewBookingSkeleton;
