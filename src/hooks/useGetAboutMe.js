import { useQuery } from "@tanstack/react-query";

import { apiGetAboutMe } from "../service/AboutMeAPI/apiGetAboutMe";

function useGetAboutMe() {
  return useQuery({
    queryKey: ["about"],
    queryFn: apiGetAboutMe,
  });
}

export default useGetAboutMe;
