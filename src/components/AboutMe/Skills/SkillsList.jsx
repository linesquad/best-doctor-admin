import { FaTrash } from "react-icons/fa";

import circleIcon from "/images/Icon.svg";

function SkillsList({ data,handleUpdateModal }) {
  const skillsData = data.skill;

  return (
    <div className="flex flex-col gap-4">
      {skillsData.map((item) => (
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
            <p onClick={handleUpdateModal} className=" bg-lightBlue text-white p-2 rounded-lg">Update</p>
            <FaTrash className="text-lightBlue hover:text-brightBlue cursor-pointer w-7 h-7" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsList;
