import { toast } from "react-toastify";
import useAddFooter from "../../hooks/useFooter/useAddFooter";
import { useGetFooter } from "../../hooks/useFooter/useGetFooter";
import { useUpdateFooter } from "../../hooks/useFooter/useUpdateFooter";

function SettingsBanner() {
  const { data, isError, isLoading, error } = useGetFooter();
  const { addFooterInfo, isPending } = useAddFooter();
  const {mutate: updateFooter} = useUpdateFooter()

  if (isPending) {
    return <p className="text-center text-blue-600">Pending...</p>;
  }
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

    // try {
    //   await addFooterInfo({
    //     text: text,
    //     phone: phone,
    //     email: email,
    //     address: address,
    //     linkedin: linkedin,
    //   });
    //   toast.success("Footer information added successfully!");
    // } catch (error) {
    //   console.error("Error adding service:", error);
    //   toast.error("Failed to add footer information.");
    // }
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="text" className="text-sm font-medium text-gray-600">
            Footer Text
          </label>
          <input
            type="text"
            name="text"
            id="text"
            defaultValue={settingData.text}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter footer text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={settingData.email}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-medium text-gray-600">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            defaultValue={settingData.phone}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter phone number"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="address"
            className="text-sm font-medium text-gray-600"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            defaultValue={settingData.address}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter address"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="linkedin"
            className="text-sm font-medium text-gray-600"
          >
            LinkedIn
          </label>
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            defaultValue={settingData.linkedin}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter LinkedIn URL"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SettingsBanner;
