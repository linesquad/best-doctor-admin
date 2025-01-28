const PatientsLoading = () => {
  return (
    <div className=" pt-[2.44rem]">

      <div className="ml-10 w-56 h-14 bg-gray-300 animate-pulse rounded-md mb-6"></div>

      <div className="py-6 px-4 bg-softBlue rounded-md mt-[2rem]">
        <ul className="grid grid-cols-5 font-bold mb-4">
          {[...Array(5)].map((_, index) => (
            <li key={index} className="px-2">
              <div className="w-24 h-4 bg-gray-300 animate-pulse rounded-md"></div>
            </li>
          ))}
        </ul>

        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-5 py-2 items-center"
          >
            <div className="w-24 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-24 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-24 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-24 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-24 h-6 bg-gray-300 animate-pulse rounded-md"></div>
          </div>
        ))}
        <div
            className="flex justify-center gap-2 mt-4"
          >
            <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-md"></div>
          </div>
      </div>
    </div>
  );
};

export default PatientsLoading;
