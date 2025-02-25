import { useQuery } from "@tanstack/react-query";

import { apiGetBookingsByDate } from "../../service/BookingAPI/bookingServices";

export function useGetBookingsByDate(date){
  return useQuery({
    queryFn: () => apiGetBookingsByDate(date),
    queryKey: ["bookingByDate"]
  })
}