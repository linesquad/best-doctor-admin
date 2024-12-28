import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { AddServices } from "../service/apiAddServices";

const useAddServices = () => {
  const queryClient = useQueryClient()
  
  const {mutateAsync: addServicesInfo} = useMutation({
    mutationFn: AddServices,
    onSuccess: () => {
      queryClient.invalidateQueries(['serv'])
      console.log("Services added successfully!");
      toast.success("Blog added successfully!");
    },
    onError: (error) => {
      console.error("Error adding service:", error);
      toast.error("Blog added successfully!");
    }
  })
  return {addServicesInfo}
}

export default useAddServices