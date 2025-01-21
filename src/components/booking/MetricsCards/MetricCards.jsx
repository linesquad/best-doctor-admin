function MetricCards({ image, title, subTitle, index }) {
  return (
    <div
      className={`bg-blue-100 p-4 rounded-lg shadow-lg flex flex-col justify-between w-full max-w-[345px] ${
        index === 2 ? "md:row-span-2  h-[345px] md:h-auto" : "h-[345px]"
      }`}
    >
      <div className="flex items-center mb-4 h-full">
        <img src={image} alt="icon" className="object-cover object-center bg-no-repeat h-[80%]" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[18px] font-robotoMedium text-[#101012]">
          {title}
        </h3>
        <h3 className="text-[#488DF1] text-[16px] font font-heeboRegular">
          {subTitle}
        </h3>
      </div>
    </div>
  );
}

export default MetricCards;
