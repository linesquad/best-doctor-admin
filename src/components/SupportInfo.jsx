import { useGetFooter } from "../hooks/useFooter/useGetFooter";
import { supportData } from "../lib/supportData";

function SupportInfo() {
  const { data, isError, isLoading, error } = useGetFooter();

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }
  if (isError) {
    return <p className="text-center text-red-500">{error.message}</p>;
  }

  const settingData = data.footer[0];

  return (
    <div>
      <p className="text-black mb-[1rem]">{settingData.text}</p>
      {supportData.map((item) => (
        <div key={item.id} className="mb-[1rem] lg:flex lg:gap-4">
          <p className="text-black font-bold">{item.method}:</p>
          <p className="break-words overflow-x-auto">{settingData[item.key]}</p>
        </div>
      ))}
    </div>
  );
}

export default SupportInfo;
