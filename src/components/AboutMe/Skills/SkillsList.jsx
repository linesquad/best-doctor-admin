import { MdModeEdit } from "react-icons/md";

import ReusableTitle from "../../ReusableTitle";

import circleIcon from "/images/Icon.svg";

function SkillsList({ data, handleUpdateModal, handleDelete }) {
  return (
    <div className="flex flex-col gap-4">
      <ReusableTitle
        title={"Skills"}
        size={"text-[3rem]"}
        color={"text-black"}
        fontWeight={"font-bold"}
      />
      {data.map((item) => (
        <div
          key={item.id}
          className="border p-4 rounded-lg flex items-center w-full justify-between"
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-softBlue w-5 h-5 flex justify-center items-center rounded-lg">
                  <img src={circleIcon} alt="" />
                </div>
                <p className="font-bold text-xl">{item.skill}</p>
              </div>
            </div>
            <p className="text-gray-600 text-semiTransparent">
              {item.description}
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <MdModeEdit onClick={() => handleUpdateModal(item)} size={25} color="#0077DD" className="cursor-pointer transition-transform duration-200 hover:scale-125"/> 
            <img
              src="/images/delete.svg"
              onClick={() => handleDelete(item.id)}
              className="text-lightBlue hover:text-brightBlue cursor-pointer w-7 h-7 transition-transform duration-200 hover:scale-125"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsList;
