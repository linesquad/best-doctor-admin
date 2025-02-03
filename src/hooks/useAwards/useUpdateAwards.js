import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { updateAwards } from "../../service/AwardsAPI/apiAwards";

export const useUpdateAwards = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({id, name, date, awardedBy}) => updateAwards(id, name, date, awardedBy),
    onSuccess: () => {
      queryClient.invalidateQueries(["awards"]);
      toast.success("Awards updated successfully");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Awards update failed");
    },
  });
};
