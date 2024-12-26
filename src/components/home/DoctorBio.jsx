import useGetDoctorBio from "../../hooks/useGetDoctorBio";

function DoctorBio() {
  const { data, isLoading, isError } = useGetDoctorBio();
  console.log(data);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default DoctorBio;
