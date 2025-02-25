import { useNavigate } from "react-router-dom";


function AppointmentsCard({
  Name,
  condition,
  age,
  id,
}) {
  const navigate = useNavigate();
  
  return (
    <div className="py-[41px] px-[31px] bg-[#FAFFFF] shadow-custom-lighter rounded-md flex justify-between items-center">
      <div className="flex flex-col gap-2 ">
        <h1 className="text-[#101012] text-[26px] font-robotoMedium">
          Patient: {Name}
        </h1>
        <h1 className="text-[#101012] text-[24px] font-heeboRegular">
          Type: Video Call
        </h1>
        <h1 className="text-[#2E18149E] text-[24px] font-heeboRegular">
          Condition: {condition}
        </h1>
        <h1 className="text-[#2E18149E] text-[24px] font-heeboRegular">
          Age: {age}
        </h1>
      </div>
      <div>
        <img
          src="./images/arrowLeft.svg"
          alt="arrow"
          className="cursor-pointer w-[20px] h-[30px]"
          onClick={() => navigate(`/booking/appointment/detailed/${id}`)}
        />
      </div>
    </div>
  );
}

export default AppointmentsCard;
