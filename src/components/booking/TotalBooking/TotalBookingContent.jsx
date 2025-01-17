import CustomButton from "../../../ui/CustomButton";
function TotalBookingContent({
  appointment,
  total,
  noShow,
  cancellation,
  month,
}) {
  return (
    <div className="bg-[#FAFFFF] shadow-custom-light p-3 flex flex-col gap-4 my-[30px] rounded-[18px] my-40">
      <div className="flex items-center justify-between">
        <h1 className="font-robotoMedium text-[#101012] text-[17px] ">
          {appointment}
        </h1>
        <h2 className="text-[#488DF1] text-[15px] leading-[135%]">{month}</h2>
      </div>
      <h1 className="text-[#101012] font-poppinsSemiBold text-[34px]">
        Total Bookings: {total}
      </h1>
      <div className="grid grid-cols-2 gap-3">
        <CustomButton
          maxW={"max-w-[591px]"}
          width={"w-full"}
          paddingY="py-[13.5px]"
          name={noShow}
          bg="bg-[#D8EFFF]"
          rounded="rounded-[48px]"
          font={"font-heeboMedium"}
          textSize={"text-[17px]"}
          leading={"leading-[135%]"}
        />
        <CustomButton
          maxW={"max-w-[591px]"}
          width={"w-full"}
          paddingY="py-[13.5px]"
          name={cancellation}
          bg="bg-[#D8EFFF]"
          rounded="rounded-[48px]"
          font={"font-heeboMedium"}
          textSize={"text-[17px]"}
          leading={"leading-[135%]"}
        />
      </div>
    </div>
  );
}

export default TotalBookingContent;
