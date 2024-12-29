import { useState } from "react";
import usePostDoctorBio from "../../hooks/usePostDoctorBio";
import useUpdateDoctorBio from "../../hooks/useUpdateDoctorBio";
function DoctorBioToggleMenu({ isOpen, id }) {
  const [selectedAction, setSelectedAction] = useState(null);
  const { mutate: PostDoctorBio } = usePostDoctorBio();
  const { mutate: updateDoctorBio } = useUpdateDoctorBio();
  // Function to get form data
  function getFormData(formElement) {
    const formData = new FormData(formElement);
    return {
      fullname: formData.get("fullname"),
      status: formData.get("status"),
      degree: formData.get("degree"),
    };
  }

  // Handling form submit actions
  function handleFormSubmit(e) {
    e.preventDefault();
    const { fullname, status, degree } = getFormData(e.target);
    switch (selectedAction) {
      case "post":
        PostDoctorBio({
          fullname: fullname,
          status: status,
          degree: degree,
        });
        break;
      case "edit":
        updateDoctorBio({ fullname, status, degree, id });
        break;
      case "upload":
        break;
      case "update":
        break;
      default:
        break;
    }

    setSelectedAction(null);
  }

  return (
    <div>
      {isOpen && (
        <div
          className="flex flex-col gap-3 bg-[#396cc333] p-4 text-[#000] w-[200px] max-w-full 
            border border-[#E0E0E0] shadow-lg rounded-lg font-poppinsSemiBold text-[14px]"
        >
          <h1
            onClick={() => setSelectedAction("post")}
            className="cursor-pointer hover:translate-x-2 transform transition-all duration-300 ease-in-out border-b pb-3 border-[#007BFF] hover:text-[#007BFF]"
          >
            Post Information
          </h1>
          <h1
            onClick={() => setSelectedAction("edit")}
            className="cursor-pointer hover:translate-x-2 transform transition-all duration-300 ease-in-out border-b pb-3 border-[#007BFF] hover:text-[#007BFF]"
          >
            Edit Information
          </h1>
          <h1
            onClick={() => setSelectedAction("upload")}
            className="cursor-pointer hover:translate-x-2 transform transition-all duration-300 ease-in-out border-b pb-3 border-[#007BFF] hover:text-[#007BFF]"
          >
            Upload Image
          </h1>
          <h1
            onClick={() => setSelectedAction("update")}
            className="cursor-pointer hover:translate-x-2 transform transition-all duration-300 ease-in-out border-b pb-3 border-[#007BFF] hover:text-[#007BFF]"
          >
            Update Image
          </h1>
        </div>
      )}
      {selectedAction && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
            <h2 className="text-xl font-bold mb-4 text-center">
              {selectedAction === "post"
                ? "Post Information"
                : selectedAction === "edit"
                  ? "Edit Information"
                  : selectedAction === "upload"
                    ? "Upload Image"
                    : "Update Image"}
            </h2>
            {selectedAction === "upload" || selectedAction === "update" ? (
              <div className="flex flex-col gap-4">
                <input
                  type="file"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                />
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedAction(null)}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => console.log("Handling file submission")}
                    className="px-4 py-2 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition"
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                  />
                  <input
                    type="text"
                    name="status"
                    placeholder="Status"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                  />
                  <input
                    type="text"
                    name="degree"
                    placeholder="Degree"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                  />
                </div>
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedAction(null)}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition"
                  >
                    Save
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DoctorBioToggleMenu;
