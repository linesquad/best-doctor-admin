import { useQuery } from "@tanstack/react-query";

import { getEducation } from "../../service/AboutMeEducationAPI/apiAboutMeEducation";


function useGetAboutMeEducation() {
  return useQuery({
    queryKey: ["education"],
    queryFn: getEducation,
  });
}

export default useGetAboutMeEducation;
