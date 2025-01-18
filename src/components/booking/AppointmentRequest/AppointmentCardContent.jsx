
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
    </div>
  );
}

export default AppointmentCardContent;
