import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { updateEducation } from "../../service/AboutMeEducationAPI/apiAboutMeEducation";

function useUpdateAboutMeEducation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, degree, from, to, uni }) =>
      updateEducation({
        id,
        degree,
        from,
        to,
        uni,
      }),
    onSuccess: () => {
      toast.success("Education Bio updated successfully");
      queryClient.invalidateQueries("education");
    },
    onError: () => {
      toast.error(`Education Bio update failed`);
    },
  });
}
export default useUpdateAboutMeEducation;
