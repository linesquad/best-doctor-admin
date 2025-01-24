import { useQuery } from "@tanstack/react-query"

import { getPatients } from "../../service/apiPatients"

export const useGetPatients = () => {
  return useQuery({
    queryFn: getPatients,
    queryKey: ["patients"]
  })
}