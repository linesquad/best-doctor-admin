import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiUpdateFooter } from "../../service/apiFooter";

export const useUpdateFooter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, text,phone,email,address,linkedin }) =>
    apiUpdateFooter(id, text,phone,email,address,linkedin),
    onSuccess: () => {
      queryClient.invalidateQueries(["footer"]);
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};
