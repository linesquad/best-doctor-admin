import { MdModeEdit } from "react-icons/md";

import ReusableTitle from "../../ReusableTitle";

function AwardsList({ data,handleUpdateModal,handleDelete }) {
  return (
    <div className="flex flex-col gap-4  mt-8">
      <ReusableTitle
        title={"Awards"}
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
                <p className="font-bold text-xl">{item.name}</p>
              </div>
            </div>
            <p className="text-gray-600 text-semiTransparent">{item.date}</p>
            <p className="text-gray-800 text-semiTransparent text-[1.15rem] font-bold">{item.awardedBy}</p>
          </div>
          <div className="flex gap-3 items-center">
            <MdModeEdit
              size={25}
              color="#0077DD"
              className="cursor-pointer transition-transform duration-200 hover:scale-125"
              onClick={() => handleUpdateModal(item)}
            />
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

export default AwardsList;
