import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { addAwards } from "../../service/apiAwards";

export const useAddAwards = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addAwards,
    onSuccess: () => {
      queryClient.invalidateQueries(["awards"]);
      toast.success("Succesfully added new awards!")
    },
    onError: (error) => {
      toast.error(`Failed to add awards: ${error.text}`);
    },
  });
};
