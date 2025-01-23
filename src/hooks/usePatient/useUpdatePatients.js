import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { updatePatients } from "../../service/apiPatients";

export const useUpdatePatients = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({id, status}) => updatePatients(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries(["patients"]);
      toast.success("Patients updated successfully");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Patients update failed");
    },
  });
};
