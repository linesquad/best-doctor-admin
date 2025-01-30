import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import apiUpdateDoctorBioImage from "../service/DoctorBioAPI/apiUpdateDoctorBioImage";

function useUpdateDoctorBioImage() {
  const Query = useQueryClient();
  return useMutation({
    mutationFn: ({ middle_pic, id }) =>
      apiUpdateDoctorBioImage({ middle_pic, id }),
    onSuccess: () => {
      toast.success("Doctor Bio image updated successfully");
      Query.invalidateQueries(["doctorImage"]);
    },
    onError: () => {
      toast.error("Doctor Bio image not updated");
    },
  });
}
export default useUpdateDoctorBioImage;
