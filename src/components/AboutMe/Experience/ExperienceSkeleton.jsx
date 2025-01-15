function ExperienceSkeleton({ count = 3 }) {
  return (
    <div className="flex flex-col w-full gap-3 mt-3">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-[16px] border rounded-lg animate-pulse"
          >
            {/* Container for image and content */}
            <div className="flex items-start w-full gap-4">
              {/* Image on the left */}
              <div className="bg-gray-300 w-5 h-5 flex justify-center items-center rounded-lg">
                {/* Placeholder for image */}
                <div className="bg-gray-200 w-full h-full rounded-lg"></div>
              </div>

              {/* Content on the right */}
              <div className="flex flex-col gap-2">
                {/* Placeholder for place title */}
                <div className="bg-gray-200 w-32 h-4 rounded"></div>

                <div className="flex gap-4">
                  {/* Placeholder for department */}
                  <div className="bg-gray-200 w-24 h-3 rounded"></div>

                  {/* Placeholder for date range */}
                  <div className="bg-gray-200 w-20 h-3 rounded"></div>
                </div>

                {/* Placeholder for position */}
                <div className="bg-gray-200 w-40 h-3 rounded"></div>
              </div>
            </div>

            {/* Placeholder for trash icon */}
            <div className="bg-gray-200 w-6 h-6 rounded"></div>
          </div>
        ))}
    </div>
  );
}

export default ExperienceSkeleton;
