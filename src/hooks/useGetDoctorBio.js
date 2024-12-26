import { useQuery } from "@tanstack/react-query";
import apiGetDoctorBio from "../service/apiGetDoctorBIo";

function useGetDoctorBio() {
  return useQuery({
    queryFn: apiGetDoctorBio,
    queryKey: ["doctorBio"],
  });
}

export default useGetDoctorBio;
