import { useMutation, useQueryClient } from "@tanstack/react-query"

import { apiUpdateServices } from "../service/apiUpdateServices"

export const useUpdateServices = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({id,title}) => apiUpdateServices(id,title),
    onSuccess: () => {
      queryClient.invalidateQueries(["services"])
    },
    onError: (error) => {
      console.error(error.message)
    }
  })
}