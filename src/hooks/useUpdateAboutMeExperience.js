import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { apiUpdateAboutMeExperience } from "../service/apiUpdateAboutMeExperience";

function useUpdateAboutMeExperience() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ place, department, dateTo, dateFrom, position, id }) =>
      apiUpdateAboutMeExperience({
        place,
        department,
        dateTo,
        dateFrom,
        position,
        id,
      }),
    onSuccess: () => {
      toast.success("Experience Bio updated successfully");
      queryClient.invalidateQueries("doctorBio");
    },
    onError: () => {
      toast.error(`Experience Bio update failed`);
    },
  });
}
export default useUpdateAboutMeExperience;
