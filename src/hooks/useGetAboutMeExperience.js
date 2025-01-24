import { useQuery } from "@tanstack/react-query";

import { apiGetAboutMeExperience } from "../service/apiGetAboutMeExperience";

function useGetAboutMeExperience() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: apiGetAboutMeExperience,
  });
}

export default useGetAboutMeExperience;
