import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { addEducation } from "../../service/apiAboutMeEducation";

function useAddAboutMeEducation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ degree, from, to, uni }) =>
      addEducation(degree, from, to, uni),
    onSuccess: () => {
      queryClient.invalidateQueries(["education"]);
      toast.success("Education updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export default useAddAboutMeEducation;
