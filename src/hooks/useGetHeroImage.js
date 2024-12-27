import { useQuery } from "@tanstack/react-query";

import { apiGetHeroImage } from "../service/apiGetHeroImage";

function useGetTest() {
  return useQuery({
    queryKey: ["HeroImage"],
    queryFn: apiGetHeroImage,
  });
}

export default useGetTest;
