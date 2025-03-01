import { useQuery } from "@tanstack/react-query";

import { apiGetFooter } from "../../service/FooterAPI/apiFooter";

export const useGetFooter = () => {
  return useQuery({
    queryKey: ["footer"],
    queryFn: apiGetFooter,
  });
};
