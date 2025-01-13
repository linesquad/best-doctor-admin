import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { apiAddFooter } from "../../service/apiFooter";

const useAddFooter = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: addFooterInfo, isPending } = useMutation({
    mutationFn: apiAddFooter,
    onSuccess: () => {
      queryClient.invalidateQueries(["footer"]);
      toast.success("Footer added successfully!");
    },
    onError: (error) => {
      console.error("Error adding footer:", error);
    },
  });
  return { addFooterInfo, isPending };
};

export default useAddFooter;
