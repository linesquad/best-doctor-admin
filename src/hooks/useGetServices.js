import { useQuery } from "@tanstack/react-query";

import { getServices } from "../service/ServiceAPI/apiGetServices";

export const useGetServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
};
