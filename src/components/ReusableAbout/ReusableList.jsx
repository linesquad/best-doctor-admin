import { MdModeEdit } from "react-icons/md";

import ReusableTitle from "../ReusableTitle";

function ReusableList({
  title, 
  data, 
  renderItem, 
  handleEdit, 
  handleDelete, 
  titleStyles = {}, 
  listStyles = {}
}) {
  return (
    <div className={`flex flex-col gap-4 mt-8 ${listStyles.container || ""}`}>
      <ReusableTitle
        title={title}
        size={titleStyles.size || "text-[3rem]"}
        color={titleStyles.color || "text-black"}
        fontWeight={titleStyles.fontWeight || "font-bold"}
      />
      {data.map((item) => (
        <div
          key={item.id}
          className={`border p-4 rounded-lg flex items-center w-full justify-between ${
            listStyles.itemContainer || ""
          }`}
        >
          {renderItem(item)}
          <div className="flex gap-3 items-center">
            {handleEdit && (
              <MdModeEdit
                size={25}
                color="#0077DD"
                className="cursor-pointer transition-transform duration-200 hover:scale-125"
                onClick={() => handleEdit(item)}
              />
            )}
            {handleDelete && (
              <img
                src="/images/delete.svg"
                onClick={() => handleDelete(item.id)}
                className="text-lightBlue hover:text-brightBlue cursor-pointer w-7 h-7 transition-transform duration-200 hover:scale-125"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReusableList;
