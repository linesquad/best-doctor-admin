import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addSkills } from "../../service/apiSkills";

export const useAddSkills = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addSkills,
    onSuccess: () => {
      queryClient.invalidateQueries(["skills"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
