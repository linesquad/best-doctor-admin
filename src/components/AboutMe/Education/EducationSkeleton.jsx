import { BsTrash3Fill } from "react-icons/bs";

function EducationSkeleton({ count = 5 }) {
  return (
    <div className="flex flex-col w-full gap-3 mt-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-[16px] border rounded-lg animate-pulse"
        >
          <div className="flex items-start w-full gap-4">
            <div className="bg-gray-300 w-5 h-5 flex justify-center items-center rounded-lg"></div>

            <div className="flex flex-col w-full">
              <div className="w-2/3 h-4 bg-gray-300 rounded-md mb-2"></div>{" "}
              <div className="flex gap-4">
                <div className="w-1/2 h-4 bg-gray-300 rounded-md"></div>{" "}
                <div className="w-1/4 h-4 bg-gray-300 rounded-md"></div>{" "}
              </div>
              <div className="w-3/4 h-4 bg-gray-300 rounded-md mt-2"></div>{" "}
            </div>
          </div>

          <BsTrash3Fill className="text-[25px] text-gray-400 cursor-not-allowed" />
        </div>
      ))}
    </div>
  );
}

export default EducationSkeleton;
