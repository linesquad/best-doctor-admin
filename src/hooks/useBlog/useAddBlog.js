import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { AddBlog } from "../../service/BlogAPI/apiAddBlog";

const useAddBlog = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: AddBlogInfo, isPending } = useMutation({
    mutationFn: AddBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blog"]);
      toast.success("Blog added successfully!");
    },
    onError: (error) => {
      console.error("Error adding blog:", error);
    },
  });
  return { AddBlogInfo, isPending };
};

export default useAddBlog;
