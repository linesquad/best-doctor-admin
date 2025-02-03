import PatientsList from "./PatientsList";
import PatientsLoading from "./PatientsLoading";
import { useGetPatients } from "../../hooks/usePatient/useGetPatients";
import { useUpdatePatients } from "../../hooks/usePatient/useUpdatePatients";
import ErrorDisplay from "../ErrorDisplay";

function Patients() {
  const { data, isLoading, isError, error } = useGetPatients();
  const { mutate: updatePatients } = useUpdatePatients();

  if (isLoading) {
    return <div><PatientsLoading /></div>;
  }
  if (isError) {
    return <ErrorDisplay errorMsg={error.message}/>;
  }

  // Update functionality
  const handleUpdate = (id) => {
    updatePatients({ id, status: "Done" });
  };

  return (
    <div>
      <PatientsList data={data.patient} handleUpdate={handleUpdate} />
    </div>
  );
}

export default Patients;
