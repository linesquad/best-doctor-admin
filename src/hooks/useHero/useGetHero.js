import { useQuery } from "@tanstack/react-query";

import { apiGetHero } from "../../service/HeroAPI/apiGetHero";

function useGetHero() {
  return useQuery({
    queryKey: ["headingsData"],
    queryFn: apiGetHero,
  });
}

export default useGetHero;
