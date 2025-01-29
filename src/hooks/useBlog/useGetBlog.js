import { useQuery } from "@tanstack/react-query";

import { getBlogsWithPagination } from "../../service/apiBlog";

export const useGetBlog = (currentPage = 1, itemsPerPage = 5) => {
  return useQuery({
    queryKey: ["doctor_blog", currentPage],
    queryFn: async () => {
      const { data, count } = await getBlogsWithPagination(
        currentPage,
        itemsPerPage
      );
      if (!data || data.length === 0) {
        return { data: [], count: 0 };
      }
      return { data, count };
    },
    keepPreviousData: true,
  });
};
