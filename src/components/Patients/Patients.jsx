import PatientsList from "./PatientsList";
import { useGetPatients } from "../../hooks/usePatient/useGetPatients";
import { useUpdatePatients } from "../../hooks/usePatient/useUpdatePatients";

function Patients() {
  const { data, isLoading, isError, error } = useGetPatients();
  const { mutate: updatePatients } = useUpdatePatients();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  console.log(data);

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