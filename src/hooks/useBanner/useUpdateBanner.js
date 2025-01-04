import { useMutation, useQueryClient } from "@tanstack/react-query";

import { UpdateBanner } from "../../service/BannerAPI/apiUpdateBanner";

const useUpdateBanner = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: updateDescription } = useMutation({
    mutationFn: ({ id, description }) => UpdateBanner(id, description),
    onSuccess: () => {
      queryClient.invalidateQueries(["banner"]);
    },
    onError(error) {
      console.error("Error updating service:", error);
    },
  });

  return { updateDescription };
};

export default useUpdateBanner;
