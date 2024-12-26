import { useQuery } from "@tanstack/react-query";

import { getServices } from "../service/apiGetServices";

export const useGetServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
};
