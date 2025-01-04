import { useQuery } from "@tanstack/react-query";

import { getBlog } from "../../service/BlogAPI/apiGetBlog";

export const useGetBlog = () => {
  return useQuery({
    queryKey: ["doctor_blog"],
    queryFn: getBlog,
  });
};
