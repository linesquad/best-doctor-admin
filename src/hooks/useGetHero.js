import { useQuery } from "@tanstack/react-query";

import { apiGetHero } from "../service/apiGetHero";

function useGetHero() {
  return useQuery({
    queryKey: ["headingsData"],
    queryFn: apiGetHero,
  });
}

export default useGetHero;
