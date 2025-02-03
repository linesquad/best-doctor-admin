import {
  FaPhoneAlt,
  FaEnvelope,
  FaIdCard,
  FaClipboardList,
  FaEye,
} from "react-icons/fa";

import Modal from "../Modal/Modal";
import ReusableTitle from "../ReusableTitle";

function MoreModal({ showMoreModal, setShowMoreModal, patient }) {
  if (!patient) return null;
  const closeModal = () => {
    setShowMoreModal(false);
  };

  return (
    <div>
      {showMoreModal && (
        <Modal>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-lightSkyBlue rounded-lg shadow-lg p-8 w-[90%] max-w-md flex flex-col gap-2">
              <div className="pb-4 border-b border-gray-300 mb-4">
                <ReusableTitle
                  title={"Name & ID"}
                  size={"text-[1.5rem]"}
                  color={"text-black"}
                  fontWeight={"font-bold"}
                />
                <div className="flex flex-col gap-4 my-4">
                  <div className="flex items-center gap-2">
                    <FaEye className="text-gray-600 " />
                    <p>{patient.user_name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaIdCard className="text-gray-600" />
                    <p>Patient ID: {patient.id}</p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <FaClipboardList className="text-gray-600" />
                    <p>Last Visit Date: {patient.date}</p>
                  </div>
                </div>
                <ReusableTitle
                  title={"Contact Us"}
                  size={"text-[1.5rem]"}
                  color={"text-black"}
                  fontWeight={"font-bold"}
                />
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-gray-600" />
                    <p>Phone: {patient.user_phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-gray-600" />
                    <p>Email: {patient.user_email}</p>
                  </div>
                </div>
              </div>
              <ReusableTitle
                title={"Detailed Information"}
                size={"text-[1.5rem]"}
                color={"text-black"}
                fontWeight={"font-bold"}
              />
              <div className=" flex items-center gap-2">
                <FaClipboardList className="text-gray-600" />
                <p>{patient.prescription}</p>
              </div>
              <button
                className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default MoreModal;
