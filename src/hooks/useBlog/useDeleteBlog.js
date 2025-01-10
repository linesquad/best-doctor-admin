import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { deleteBlogs } from "../../service/apiBlog";

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteBlogs(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["blog"])
      toast.success("Blog Deleted successfully!")
    },
    onError: () => {
      toast.error("Blog deletion failed.!")
    },
  });
};