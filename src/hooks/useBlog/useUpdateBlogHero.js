import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { apiUpdateBlogHero } from "../../service/BlogHeroAPI/apiUpdateBlogHero";
function useUpdateBlogHero() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ image, subtitle, title, id }) =>
      apiUpdateBlogHero({ image, subtitle, title, id }),
    onSuccess: () => {
      queryClient.invalidateQueries(["blogHeroImage"]);
      toast.success("Blog Hero updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return mutation;
}

export default useUpdateBlogHero;
