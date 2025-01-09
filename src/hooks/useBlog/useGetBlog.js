import { useQuery } from "@tanstack/react-query";
import { getBlog } from "../../service/apiBlog";

export const useGetBlog = (id) => {
  return useQuery({
    queryKey: id ? ["doctor_blog", id] : ["doctor_blog"],
    queryFn: () => getBlog(id),
  });
};
