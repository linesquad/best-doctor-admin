import { useQuery } from "@tanstack/react-query";

import { apiGetAboutMeExperience } from "../service/AboutMeExperienceAPI/apiGetAboutMeExperience";

function useGetAboutMeExperience() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: apiGetAboutMeExperience,
  });
}

export default useGetAboutMeExperience;
