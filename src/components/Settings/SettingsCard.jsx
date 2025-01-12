import { toast } from "react-toastify";
import useAddFooter from "../../hooks/useFooter/useAddFooter";
import { useGetFooter } from "../../hooks/useFooter/useGetFooter";

function SettingsBanner() {
  const { data, isError, isLoading, error } = useGetFooter();
  const { addFooterInfo, isPending } = useAddFooter();
  console.log(data);
  if (isPending) {
    return <p>Pending...</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const address = formData.get("address");
    const linkedin = formData.get("linkedin");

    try {
      await addFooterInfo({
        text: text,
        phone: phone,
        email: email,
        address: address,
        linkedin: linkedin,
      });
    } catch (error) {
      console.error("Error adding service:", error);
      toast.error("Failed to add service.");
    }
  };

  return (
    <div className="bg-softBlue w-full ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-10">
        <input type="text" name="text" />
        <input type="text" name="email" />
        <input type="text" name="phone" />
        <input type="text" name="address" />
        <input type="text" name="linkedin" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SettingsBanner;
