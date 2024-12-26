import { useMutation } from "@tanstack/react-query";
import apiPostHeroImage from "../service/apiPostHeroImage";
import { toast } from "react-toastify";
function usePostHeroImage() {
  const mutation = useMutation({
    mutationFn: ({ top_pic }) => apiPostHeroImage(top_pic),
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
