import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { deleteSkill } from "../../service/SkillsAPI/apiSkills";

export const useDeleteSkill = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteSkill(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["skills"])
      toast.success("Skill Deleted successfully!")
    },
    onError: () => {
      toast.error("Skill deletion failed.!")
    },
  });
};