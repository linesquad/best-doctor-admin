import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { updatePatients } from "../../service/PatientsAPI/apiPatients";

export const useUpdatePatients = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }) => updatePatients(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries(["patients"]);
      toast.success("Patients status updated successfully");
    },
    onError: (error) => {
      toast.error("Patients status update failed", error.message);
    },
  });
};
