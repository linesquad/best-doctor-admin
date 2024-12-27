function ToggleMenu({ isOpen }) {
  return (
    <div>
      {isOpen && (
        <div
          className="flex flex-col gap-3 bg-[#396cc333] p-4 text-[#000] w-[200px] max-w-full 
            border border-[#E0E0E0] shadow-lg rounded-lg font-poppinsSemiBold text-[14px] "
        >
          <h1 className="cursor-pointer hover:translate-x-2 transform transition-all duration-300 ease-in-out border-b pb-3 border-[#007BFF] hover:text-[#007BFF]">
            Edit Text
          </h1>
          <h1 className="cursor-pointer hover:translate-x-2 transform transition-all duration-300 ease-in-out border-b pb-3 border-[#007BFF] hover:text-[#007BFF]">
            Upload Image
          </h1>
          <h1 className="cursor-pointer hover:translate-x-2 transform transition-all duration-300 ease-in-out border-b pb-3 border-[#007BFF] hover:text-[#007BFF]">
            Update Image
          </h1>
        </div>
      )}
    </div>
  );
}

export default ToggleMenu;
