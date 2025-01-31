import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import apiPostHeroImage from "../service/HeroAPI/apiPostHeroImage";

function usePostHeroImage() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ top_pic, id }) => apiPostHeroImage({ top_pic, id }),
    onSuccess: () => {
      toast.success("Image updated successfully.");
      queryClient.invalidateQueries(["heroImage"]);
    },
    onError: (err) => {
      toast.error(err.message);
      queryClient.invalidateQueries("");
    },
  });
  return mutation;
}
export default usePostHeroImage;
