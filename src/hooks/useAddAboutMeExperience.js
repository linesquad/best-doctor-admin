import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { apiAddAboutMeExperience } from "../service/apiAddAboutMeExperience";

function useAddAboutMeExperience() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, dateTo, dateFrom, place, department, position }) =>
      apiAddAboutMeExperience(
        id,
        dateTo,
        dateFrom,
        place,
        department,
        position
      ),
    onSuccess: () => {
      // Invalidate the about query to refetch updated data
      queryClient.invalidateQueries(["about"]);
      toast.success("Experience updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export default useAddAboutMeExperience;
