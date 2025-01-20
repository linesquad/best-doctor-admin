import React from "react";

function AppointmentCardSkeleton() {
  return (
    <div className="py-[41px] px-[31px] bg-[#FAFFFF] shadow-custom-lighter rounded-md flex justify-between items-center animate-pulse">
      <div className="flex flex-col gap-2 w-full">
        <div className="bg-[#E0E0E0] h-[26px] w-[70%] rounded-md"></div>
        <div className="bg-[#E0E0E0] h-[24px] w-[85%] rounded-md"></div>
        <div className="bg-[#E0E0E0] h-[24px] w-[60%] rounded-md"></div>
        <div className="bg-[#E0E0E0] h-[24px] w-[75%] rounded-md"></div>
      </div>
      <div>
        <div className="bg-[#E0E0E0] w-[20px] h-[30px] rounded-md"></div>
      </div>
    </div>
  );
}

export default AppointmentCardSkeleton;
