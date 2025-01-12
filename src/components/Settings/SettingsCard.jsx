import { toast } from "react-toastify";
import { useGetFooter } from "../../hooks/useFooter/useGetFooter";
import { useUpdateFooter } from "../../hooks/useFooter/useUpdateFooter";
import SettingsForm from "./SettingsForm";

function SettingsBanner() {
  const { data, isError, isLoading, error } = useGetFooter();
  const {mutate: updateFooter} = useUpdateFooter()

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }
  if (isError) {
    return <p className="text-center text-red-500">{error.message}</p>;
  }
  console.log(data);

  const settingData = data.footer[0]

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const address = formData.get("address");
    const linkedin = formData.get("linkedin");

    updateFooter({
      id: settingData.id,
      text: text,
      phone: phone,
      email: email,
      address: address,
      linkedin: linkedin})
      toast.success("Footer updated successfully!")
  };

  return (
    <div className="bg-softBlue w-full p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Settings</h2>
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Footer Change</h3>
      <SettingsForm handleSubmit={handleSubmit} settingData={settingData}/>
    </div>
  );
}

export default SettingsBanner;
