import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { updateSkill } from "../../service/SkillsAPI/apiSkills";

export const useUpdateSkills = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({id, skill, description}) => updateSkill(id, skill, description),
    onSuccess: () => {
      queryClient.invalidateQueries(["skills"]);
      toast.success("Skill updated successfully");
    },
    onError: (error) => {
      toast.error("Skill update failed", error.message);
    },
  });
};
