

function MetricCardsSkeleton() {
  return (
    <div className="grid grid-cols-1 place-items-center sm:place-items-stretch sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={`bg-blue-100 p-4 rounded-lg shadow-lg flex flex-col justify-between w-full max-w-[345px] h-[345px] animate-pulse`}
        >
          <div className="flex items-center mb-4 h-full">
            <div className="bg-gray-300 h-16 w-16 rounded-full mx-auto"></div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
            <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MetricCardsSkeleton;
