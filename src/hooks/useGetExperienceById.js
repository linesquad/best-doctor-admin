import { useQuery } from "@tanstack/react-query";

import { apiGetExperienceById } from "../service/apiGetExperienceById";

export const useGetExperienceById = (id) => {
  return useQuery({
    queryKey: ["experience", id],
    queryFn: () => apiGetExperienceById(id),
    enabled: !!id,
  });
};
