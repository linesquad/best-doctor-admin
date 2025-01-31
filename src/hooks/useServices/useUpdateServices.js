import { useMutation, useQueryClient } from "@tanstack/react-query"

import { apiUpdateServices } from "../../service/ServicesAPI/apiUpdateServices"

export const useUpdateServices = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({id,title,image,content}) => apiUpdateServices(id,title,image,content),
    onSuccess: () => {
      queryClient.invalidateQueries(["services"])
    },
    onError: (error) => {
      console.error(error.message)
    }
  })
}