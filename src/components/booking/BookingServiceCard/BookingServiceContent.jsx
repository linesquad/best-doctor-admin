function BookingServiceContent({ status, count, image, type }) {
  return (
    <div className="shadow-custom-lighter p-[16px] w-[329px] max-w-full flex flex-col gap-28 rounded-[7px] ">
      <img src={image} alt="booking" className="w-[83px] h-[83px]" />
      <div>
        <h1 className="text-[#101012] text-[17px] font-robotoMedium">
          {status}
        </h1>
        <p className="text-[rgb(66,129,220)] text-[13px] font-heeboRegular">
          {count} {type}
        </p>
      </div>
    </div>
  );
}

export default BookingServiceContent;
