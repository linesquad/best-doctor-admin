function CustomButton({
  width,
  name,
  color,
  bg,
  paddingX,
  paddingY,
  hoverBg,
  type,
  marginT,
}) {
  return (
    <div className="text-center">
      <button
        type={type}
        className={`${color} ${width} ${bg} ${paddingX} ${paddingY} hover:${hoverBg} ${marginT} w-full
        transition-all duration-500 ease-in-out rounded-[56px] cursor-pointer font-Roboto text-[32px] font-extrabold leading-[43.2px]`}
      >
        {name}
      </button>
    </div>
  );
}

export default CustomButton;
