import BookingServiceContent from "./BookingServiceContent";

function BookingServiceCards() {
  return (
    <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-7">
      <BookingServiceContent
        count={5}
        image={"./images/newbooking.svg"}
        status={"New Booking"}
        type={"appointments"}
      />
      <BookingServiceContent
        count={5}
        image={"./images/On-Time.svg"}
        status={"Rescheduled"}
        type={"appointments"}
      />
      <BookingServiceContent
        count={5}
        image={"./images/newbooking.svg"}
        status={"Cancelled"}
        type={"appointments"}
      />
      <BookingServiceContent
        count={5}
        image={"./images/On-Time.svg"}
        status={"Request"}
        type={"appointments"}
      />
      <BookingServiceContent
        count={5}
        image={"./images/Pause.svg"}
        status={"Pending"}
        type={"appointments"}
      />
      <BookingServiceContent
        count={5}
        image={"./images/Verified.svg"}
        status={"Completed"}
        type={"appointments"}
      />
    </div>
  );
}

export default BookingServiceCards;
