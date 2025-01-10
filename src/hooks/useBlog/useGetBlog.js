import { useQuery } from "@tanstack/react-query";

import { getBlog } from "../../service/BlogAPI/apiGetBlog";

export const useGetBlog = (id) => {
  return useQuery({
    queryKey: id ? ["doctor_blog", id] : ["doctor_blog"],
    queryFn: () => getBlog(id),
  });
};

// make separete hook for get all blogs and single blog
