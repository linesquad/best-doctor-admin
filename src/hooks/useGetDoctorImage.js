import { useQuery } from "@tanstack/react-query";
import apiGetDoctorBioImage from "../service/apiGetDoctorBioImage";

function useGetDoctorImage() {
  return useQuery({
    queryFn: apiGetDoctorBioImage,
    queryKey: ["doctorBio"],
  });
}

export default useGetDoctorImage;
