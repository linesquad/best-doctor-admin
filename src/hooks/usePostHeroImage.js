import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import apiPostHeroImage from "../service/apiPostHeroImage";
function usePostHeroImage() {
  const mutation = useMutation({
    mutationFn: ({ top_pic, id }) =>
      apiPostHeroImage({ top_pic: top_pic, id: id }),
    onSuccess: () => {
      toast.success("Image uploaded successfully.");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutation;
}
export default usePostHeroImage;
