import { useQuery } from "@tanstack/react-query";

import { getAwards } from "../../service/AwardsAPI/apiAwards";

export const useGetAwards = () => {
  return useQuery({
    queryKey: ["awards"],
    queryFn: getAwards,
  });
};
