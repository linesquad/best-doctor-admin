import { useQuery } from "@tanstack/react-query";

import { getBlog } from "../../service/apiBlog";

export const useGetBlog = () => {
  return useQuery({
    queryKey: ["doctor_blog"],
    queryFn: getBlog,
  });
};

// make separete hook for get all blogs and single blog
