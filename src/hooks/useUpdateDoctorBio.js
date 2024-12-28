import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiUpdateDoctorBio from "../service/apiUpdateDoctorBio";
import { toast } from "react-toastify";

function useUpdateDoctorBio() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ fullname, status, degree, id }) =>
      apiUpdateDoctorBio({
        fullname: fullname,
        status: status,
        degree: degree,
        id: id,
      }),
    onSuccess: () => {
      toast.success("Doctor Bio updated successfully");
      queryClient.invalidateQueries("doctorBio");
    },
    onError: () => {
      toast.error("Doctor Bio not updated");
    },
  });
}
export default useUpdateDoctorBio;
