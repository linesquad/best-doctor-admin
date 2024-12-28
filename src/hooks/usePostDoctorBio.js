import { useMutation } from "@tanstack/react-query";
import apiPostDoctorBio from "../service/apiPostDoctorBio";
import { toast } from "react-toastify";

function usePostDoctorBio() {
  return useMutation({
    mutationFn: ({ fullname, status, degree }) =>
      apiPostDoctorBio({
        fullname: fullname,
        status: status,
        degree: degree,
      }),
    onSuccess: () => {
      toast.success("Doctor Bio added successfully");
    },
    onError: () => {
      toast.error("Doctor Bio not added");
    },
  });
}

export default usePostDoctorBio;
