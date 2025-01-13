function SettingsFormSkeleton() {
  return (
    <div>
      <form className="flex flex-col gap-4 p-6">
        <div className="h-10 w-36 bg-gray-300 rounded-md mb-6"></div>
        <div className="h-8 w-36 bg-gray-300 rounded-md mb-6"></div>
        <div className="flex flex-col">
          <div className="h-4 w-24 bg-gray-300 rounded-sm mb-2"></div>
          <div className="h-16 bg-gray-300 rounded-md"></div>
        </div>
        <div className="flex flex-col">
          <div className="h-4 w-24 bg-gray-300 rounded-sm mb-2"></div>
          <div className="h-10 bg-gray-300 rounded-md"></div>
        </div>
        <div className="flex flex-col">
          <div className="h-4 w-24 bg-gray-300 rounded-sm mb-2"></div>
          <div className="h-10 bg-gray-300 rounded-md"></div>
        </div>
        <div className="flex flex-col">
          <div className="h-4 w-24 bg-gray-300 rounded-sm mb-2"></div>
          <div className="h-10 bg-gray-300 rounded-md"></div>
        </div>
        <div className="flex flex-col">
          <div className="h-4 w-24 bg-gray-300 rounded-sm mb-2"></div>
          <div className="h-10 bg-gray-300 rounded-md"></div>
        </div>
        <div className="h-10 bg-gray-400 rounded-md mt-4"></div>
      </form>
    </div>
  );
}

export default SettingsFormSkeleton;
