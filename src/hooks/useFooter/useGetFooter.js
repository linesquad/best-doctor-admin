import { useQuery } from "@tanstack/react-query";

import { apiGetFooter } from "../../service/apiGetFooter";

export const useGetFooter = () => {
  return useQuery({
    queryKey: ["footer"],
    queryFn: apiGetFooter,
  });
};
