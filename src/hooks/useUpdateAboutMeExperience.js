import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { apiUpdateAboutMeExperience } from "../service/AboutMeExperienceAPI/apiUpdateAboutMeExperience";

function useUpdateAboutMeExperience() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ place, department, dateTo, dateFrom, position, id }) =>
      apiUpdateAboutMeExperience({
        id,
        place,
        department,
        dateTo,
        dateFrom,
        position,
      }),
    onSuccess: () => {
      toast.success("Experience Bio updated successfully");
      queryClient.invalidateQueries("experience");
    },
    onError: () => {
      toast.error(`Experience Bio update failed`);
    },
  });
}
export default useUpdateAboutMeExperience;
