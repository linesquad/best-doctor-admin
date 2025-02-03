import { useQuery } from "@tanstack/react-query";

import { apiGetBookings } from "../../service/BookingAPI/bookingServices";
export function useGetBooking() {
  return useQuery({
    queryFn: apiGetBookings,
    queryKey: ["bookingsData"],
  });
}
