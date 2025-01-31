import { useQuery } from "@tanstack/react-query";

import { getBookingById } from "../service/BookingAPI/bookingServices";

export function useGetBookingById(id) {
  return useQuery({
    queryKey: ["bookingsById", id],
    queryFn: () => getBookingById(id),
    enabled: !!id,
  });
}
