import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { AddServices } from "../../service/ServicesAPI/apiAddServices";

const useAddServices = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: addServicesInfo, isPending } = useMutation({
    mutationFn: AddServices,
    onSuccess: () => {
      queryClient.invalidateQueries(["serv"]);
      toast.success("Services added successfully!");
    },
    onError: (error) => {
      console.error("Error adding service:", error);
    },
  });
  return { addServicesInfo, isPending };
};

export default useAddServices;
