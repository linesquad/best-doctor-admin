import CustomButton from "../../../ui/CustomButton";
function AppointmentCardContent({ Name, time, condition, Prescription, age }) {
  return (
    <div className="flex flex-col gap-2 bg-[#FAFFFF] shadow-custom-light p-8 rounded-[24px]">
      <h1 className="text-[#101012] text-[26px] font-robotoMedium">
        Patient: {Name}
      </h1>
      <h1 className="text-[#101012] text-[24px] font-heeboRegular">
        Time: {time}
      </h1>
      <h1 className="text-[#2E18149E] text-[24px] font-heeboRegular">
        Condition: {condition}
      </h1>
      <h1 className="text-[#2E18149E] text-[24px] font-heeboRegular">
        Last Prescription: {Prescription} . Age: {age}
      </h1>
      <div className="grid grid-cols-2 gap-4 pt-7">
        <CustomButton
          bg="bg-[#004682]"
          color={"text-white"}
          font={"font-robotoRegular"}
          textSize={"text-[24px]"}
          name={"Approve"}
          rounded={"rounded-[48px]"}
          maxW={"max-w-[564px]"}
          width={"w-full"}
          paddingY="py-[27.5px]"
        />
        <CustomButton
          bg={"bg-[#004682]"}
          color={"text-white"}
          font={"font-robotoRegular"}
          textSize={"text-[24px]"}
          name={"Dismiss"}
          rounded={"rounded-[48px]"}
          maxW={"max-w-[591px]"}
          width={"w-full"}
          paddingY="py-[27.5px]"
        />
      </div>
    </div>
  );
}

export default AppointmentCardContent;
