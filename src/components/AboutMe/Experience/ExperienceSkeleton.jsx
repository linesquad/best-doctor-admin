import { BsTrash3Fill } from "react-icons/bs";

function ExperienceSkeleton({ count = 3 }) {
  return (
    <div className="flex flex-col w-full gap-3 mt-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-[16px] border rounded-lg animate-pulse"
        >
          <div className="flex items-start w-full gap-4">
            {/* Image on the left */}
            <div className="bg-gray-300 w-5 h-5 flex justify-center items-center rounded-lg">
              <div className="bg-gray-200 w-full h-full rounded-lg"></div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <div className="bg-gray-200 w-32 h-4 rounded-md"></div>

              <div className="flex gap-4">
                <div className="bg-gray-200 w-24 h-3 rounded-md"></div>

                <div className="bg-gray-200 w-20 h-3 rounded-md"></div>
              </div>

              <div className="bg-gray-200 w-40 h-3 rounded-md"></div>
            </div>
          </div>

          <BsTrash3Fill className="text-[25px] text-gray-400 cursor-not-allowed" />
        </div>
      ))}
    </div>
  );
}

export default ExperienceSkeleton;
