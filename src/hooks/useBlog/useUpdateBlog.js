import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiUpdateBlog } from "../../service/apiBlog";

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, title, slug, content, picture, time }) =>
      apiUpdateBlog(id, title, slug, content, picture, time),
    onSuccess: () => {
      queryClient.invalidateQueries(["doctor_blog"]);
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};
