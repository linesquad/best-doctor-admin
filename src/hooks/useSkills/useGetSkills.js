import { useQuery } from "@tanstack/react-query";

import { getSkills } from "../../service/apiSkills";

export const useGetSkills = () => {
  return useQuery({
    queryKey: ["skills"],
    queryFn: getSkills,
  });
};
