import { useQuery } from "@tanstack/react-query";

import { getServicesId } from "../../service/ServicesAPI/apiGetSericesId.js";

export const useGetServicesId = (id) => {
  return useQuery({
    queryKey: ["services", id],
    queryFn: () => getServicesId(id),
    enabled: !!id,
  });
};
