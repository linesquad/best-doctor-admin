import { useQuery } from "@tanstack/react-query";

import { apiGetBlogHero } from "../service/apiGetBlogHero";

function useGetBlogHero() {
  return useQuery({
    queryKey: ["blogHeroImage"],
    queryFn: apiGetBlogHero,
  });
}

export default useGetBlogHero;
