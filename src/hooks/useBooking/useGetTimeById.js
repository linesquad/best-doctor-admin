import { useQuery } from "@tanstack/react-query";

import { getTimesById } from "../../service/BookingAPI/bookingServices";

export const useGetTimeById = (id) => {
  return useQuery({
    queryKey: ["timesById", id],
    queryFn: () => getTimesById(id),
  });
};