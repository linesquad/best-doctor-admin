import PatientsList from "./PatientsList"
import { useGetPatients } from "../../hooks/usePatient/useGetPatients"


function Patients() {
  const {data, isLoading,isError, error} = useGetPatients()

  if(isLoading){
    return <div>Loading...</div>
  }
  if(isError){
    return <p>{error.message}</p>
  }

  console.log(data)
  return (
    <div>
      <PatientsList data={data?.patient}/>
    </div>
  )
}

export default Patients