import DoctorBioForm from "./DoctorBioForm";
import Modal from "../../Modal";
function DoctorModal({
  selectedAction,
  setSelectedAction,
  handleFileChange,
  docId,
  middle_pic,
  handleFormSubmit,
  BioPending,
  handleUploadImageMiddle,
  file,
  updateDoctorImage,
  isOpen,
  doctorFullname,
  doctorStatus,
  doctorDegree,
}) {
  return (
    <>
      {isOpen && (
        <div className="flex flex-col gap-3 bg-[#396cc333] p-4 text-[#000] w-[200px] max-w-full border border-[#E0E0E0] shadow-lg rounded-lg font-poppinsSemiBold text-[14px]">
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
        </div>
      )}
      <Modal>
        {selectedAction && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
              <h2 className="text-xl font-bold mb-4 text-center">
                {selectedAction === "edit"
                  ? "Edit Information"
                  : "Upload Image"}
              </h2>
              {selectedAction === "upload" ? (
                <div className="flex flex-col gap-4">
                  <input
                    type="file"
                    onChange={handleFileChange}
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
                      onClick={() =>
                        handleUploadImageMiddle(
                          file,
                          updateDoctorImage,
                          setSelectedAction,
                          docId,
                          middle_pic
                        )
                      }
                      className="px-4 py-2 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition flex items-center justify-center"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              ) : (
                <DoctorBioForm
                  onSubmit={handleFormSubmit}
                  onCancel={() => setSelectedAction(null)}
                  isPending={BioPending}
                  doctorFullname={doctorFullname}
                  doctorStatus={doctorStatus}
                  doctorDegree={doctorDegree}
                />
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default DoctorModal;
