import { BsTrash3Fill } from "react-icons/bs";

import ReusableTitle from "../../ReusableTitle";

function AwardsSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <ReusableTitle
        title={"Awards"}
        size={"text-[3rem]"}
        color={"text-gray-300"}
        fontWeight={"font-bold"}
      />
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="border p-4 rounded-lg flex items-center w-full justify-between animate-pulse"
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col justify-startitems-center gap-3">
                <div className="bg-gray-300 h-6 w-32 rounded"></div>
                <div className="bg-gray-300 h-6 w-20 rounded"></div>
              </div>
            </div>
            <div className="bg-gray-200 h-6 w-60 mt-2 rounded"></div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-gray-300 h-8 w-16 rounded"></div>
            <BsTrash3Fill className="text-[25px] text-gray-400 cursor-not-allowed" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AwardsSkeleton;
