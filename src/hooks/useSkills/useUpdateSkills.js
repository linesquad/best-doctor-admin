import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { updateSkill } from "../../service/apiSkills";

export const useUpdateSkills = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({id, skill, description}) => updateSkill(id, skill, description),
    onSuccess: () => {
      queryClient.invalidateQueries(["skills"]);
      toast.success("Skill updated successfully");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Skill update failed");
    },
  });
};
