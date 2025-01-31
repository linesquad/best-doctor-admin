import { useQuery } from "@tanstack/react-query";

import { apiGetBlogHero } from "../../service/BlogHeroAPI/apiGetBlogHero";

function useGetBlogHero() {
  return useQuery({
    queryKey: ["blogHeroImage"],
    queryFn: apiGetBlogHero,
  });
}

export default useGetBlogHero;
