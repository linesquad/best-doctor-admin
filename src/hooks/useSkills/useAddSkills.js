import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { addSkills } from "../../service/apiSkills";

export const useAddSkills = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addSkills,
    onSuccess: () => {
      queryClient.invalidateQueries(["skills"]);
      toast.success("Succesfully added new skill!")
    },
    onError: (error) => {
      toast.error(`Failed to add skill: ${error.text}`);
    },
  });
};
