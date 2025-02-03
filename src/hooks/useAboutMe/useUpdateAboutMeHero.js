import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { apiUpdateAboutMeHeroImg } from "../../service/AboutMeAPI/apiUpdateAboutMeHeroImg";
function useUpdateAboutMeHero() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ image, id }) =>
      apiUpdateAboutMeHeroImg({ image,  id }),
    onSuccess: () => {
      queryClient.invalidateQueries(["about"]);
      toast.success("Blog Hero updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return mutation;
}

export default useUpdateAboutMeHero;
