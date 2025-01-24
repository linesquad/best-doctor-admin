import { useState } from "react";

import { patientNav } from "../../lib/patientsNav";
import ReusableTitle from "../ReusableTitle";
import MoreModal from "./MoreModal";

function PatientsList({ data, handleUpdate }) {
  const [pendingPatient, setPendingPatient] = useState(null);
  const [showMoreModal, setShowMoreModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null); 

  const handleStatusClick = (id, status) => {
    if (status !== "Done") {
      setPendingPatient((prev) => (prev === id ? null : id));
    }
  };

  const handleMoreClick = (patient) => {
    setSelectedPatient(patient); 
    setShowMoreModal(true); 
  };

  return (
    <div className=" pt-[2.44rem]">
      <div className="pl-6">

      <ReusableTitle
        title={"Patients list"}
        size={"text-[3rem]"}
        color={"text-black"}
        fontWeight={"font-bold"}
      />
      </div>
      <div className="py-6 px-4 bg-softBlue rounded-md mt-[2rem]">
        <ul className="grid grid-cols-5 font-bold mb-4">
          {patientNav.map((navItem) => (
            <li key={navItem.id} className="px-2">
              {navItem.name}
            </li>
          ))}
        </ul>

        {data.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-5 py-2 items-center relative"
          >
            <p className="px-2">{item.user_name}</p>
            <p className="px-2">{item.date}</p>
            <p className="px-2">{item.condition}</p>
            <p
              className={`px-2 text-center rounded-[3rem] py-2 cursor-pointer relative transition-all duration-300 ${
                item.status === "Pending"
                  ? pendingPatient === item.id
                    ? "bg-darkBlue text-white rounded-t-[3rem] rounded-b-none"
                    : "bg-darkBlue text-white"
                  : "bg-green-800 text-white"
              }`}
              onClick={() => handleStatusClick(item.id, item.status)}
            >
              {item.status}
              {pendingPatient === item.id && item.status === "Pending" && (
                <span
                  onClick={() => handleUpdate(item.id)}
                  className="absolute w-full top-full left-0 bg-green-800 hover:bg-green-600 text-white text-center rounded-b-[3rem] py-1 px-2 shadow-lg z-10 transition-opacity duration-300 opacity-100 animate-fadeIn"
                >
                  Done
                </span>
              )}
            </p>

            <p
              className="px-2 text-center text-blue-600 cursor-pointer"
              onClick={() => handleMoreClick(item)}
            >
              More
            </p>
          </div>
        ))}
      </div>

      <MoreModal
        showMoreModal={showMoreModal}
        setShowMoreModal={setShowMoreModal}
        patient={selectedPatient}
      />
    </div>
  );
}

export default PatientsList;
