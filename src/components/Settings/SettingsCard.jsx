import { toast } from "react-toastify";
import { useGetFooter } from "../../hooks/useFooter/useGetFooter";
import { useUpdateFooter } from "../../hooks/useFooter/useUpdateFooter";
import SettingsForm from "./SettingsForm";
import SettingsFormSkeleton from "./SettingsFormSkeleton";

function SettingsBanner() {
  const { data, isError, isLoading, error } = useGetFooter();
  const { mutate: updateFooter } = useUpdateFooter();

  if (isLoading) {
    return (
      <div className="text-center text-gray-500">
        <SettingsFormSkeleton />
      </div>
    );
  }
  if (isError) {
    return <p className="text-center text-red-500">{error.message}</p>;
  }
  console.log(data);

  const settingData = data.footer[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const text = formData.get("text").trim();
    const phone = formData.get("phone").trim();
    const email = formData.get("email").trim();
    const address = formData.get("address").trim();
    const linkedin = formData.get("linkedin").trim();

    if (!text || text.length < 30 || text.length > 200) {
      return toast.error(
        "Footer text must be between 30 and 200 characters long!"
      );
    }

    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return toast.error("Please enter a valid email address!");
    }

    if (!phone || !/^\d+$/.test(phone)) {
      return toast.error("Please enter a valid phone number!");
    }
    if (phone.length < 9 || phone.length > 16) {
      return toast.error("Phone number must be between 9 and 16 digits long!");
    }
    if (!linkedin) {
      return toast.error("Please enter a valid LinkedIn URL!");
    }

    updateFooter({
      id: settingData.id,
      text,
      phone,
      email,
      address,
      linkedin,
    });

    toast.success("Footer updated successfully!");
  };

  return (
    <div className="bg-softBlue w-full p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Settings</h2>
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Footer Change
      </h3>
      <SettingsForm handleSubmit={handleSubmit} settingData={settingData} />
    </div>
  );
}

export default SettingsBanner;
