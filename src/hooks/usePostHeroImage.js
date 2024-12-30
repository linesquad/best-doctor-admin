import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import apiPostHeroImage from "../service/apiPostHeroImage";

function usePostHeroImage() {
  const mutation = useMutation({
    mutationFn: ({ top_pic, id }) => apiPostHeroImage({ top_pic, id }),
    onSuccess: () => {
      toast.success("Image updated successfully.");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutation;
}
export default usePostHeroImage;
