import { FaTrash } from "react-icons/fa";

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
            <p
              onClick={() => handleUpdateModal(item)}
              className=" bg-lightBlue text-white p-2 rounded-lg cursor-pointer"
            >
              Update
            </p>
            <FaTrash
              onClick={() => handleDelete(item.id)}
              className="text-lightBlue hover:text-brightBlue cursor-pointer w-7 h-7"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsList;
