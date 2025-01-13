import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { apiUpdateAboutMeExperience } from "../service/apiUpdateAboutMeExperience";

function useUpdateAboutMeExperience() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, post, department, position }) =>
      apiUpdateAboutMeExperience(id, post, department, position),
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

export default useUpdateAboutMeExperience;
