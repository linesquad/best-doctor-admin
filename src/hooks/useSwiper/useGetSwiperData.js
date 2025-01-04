import { useQuery } from "@tanstack/react-query";

import apiGetSwiperItems from "../../service/SwiperAPI/apiGetSwiperItems";

function useGetSwiperData() {
  return useQuery({
    queryFn: apiGetSwiperItems,
    queryKey: ["SwiperData"],
  });
}

export default useGetSwiperData;
