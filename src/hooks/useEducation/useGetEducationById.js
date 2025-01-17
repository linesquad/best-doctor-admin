import { useQuery } from "@tanstack/react-query";

import { getEducationById } from "../../service/apiAboutMeEducation";

export const useGetEducationById = (id) => {
  return useQuery({
    queryKey: ["education", id],
    queryFn: () => getEducationById(id),
    enabled: !!id,
  });
};
