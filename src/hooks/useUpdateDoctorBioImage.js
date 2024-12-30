import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import apiUpdateDoctorBioImage from "../service/apiUpdateDoctorBioImage";

function useUpdateDoctorBioImage() {
  return useMutation({
    mutationFn: ({ middle_pic, id }) =>
      apiUpdateDoctorBioImage({ middle_pic, id }),
    onSuccess: () => {
      toast.success("Doctor Bio image updated successfully");
    },
    onError: () => {
      toast.error("Doctor Bio image not updated");
    },
  });
}
export default useUpdateDoctorBioImage;
