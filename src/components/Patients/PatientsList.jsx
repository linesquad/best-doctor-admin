import { patientNav } from "../../lib/patientsNav";
import ReusableTitle from "../ReusableTitle";

function PatientsList({ data }) {
  return (
    <div className="px-10 pt-[2.44rem] ">
      <ReusableTitle
        title={"Patients list"}
        size={"text-[3rem]"}
        color={"text-black"}
        fontWeight={"font-bold"}
      />
      <div className="py-6 px-4 bg-softBlue rounded-md mt-[2rem]">
        <ul className="grid grid-cols-5 font-bold mb-4 ">
          {patientNav.map((navItem) => (
            <li key={navItem.id} className="px-2">
              {navItem.name}
            </li>
          ))}
        </ul>

        {data.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-5 py-2 items-center "
          >
            <p className="px-2">{item.user_name}</p>
            <p className="px-2">{item.date}</p>
            <p className="px-2">{item.condition}</p>
            <p className="px-2 text-center bg-darkBlue text-white rounded-[3rem] py-2 cursor-pointer">
              {item.status}
            </p>
            <p className="px-2 text-center text-blue-600 cursor-pointer">
              More
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientsList;
