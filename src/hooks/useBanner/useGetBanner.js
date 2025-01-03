import { useQuery } from "@tanstack/react-query";

import { apiGetBanner } from "../../service/BannerAPI/apiGetBanner";

export const useGetBanner = () => {
  return useQuery({
    queryKey: ["banner"],
    queryFn: apiGetBanner,
  });
};
