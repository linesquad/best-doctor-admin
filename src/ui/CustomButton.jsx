function CustomButton({
  width,
  name,
  color,
  bg,
  paddingX,
  paddingY,
  type,
  marginT,
  disabled,
  loading,
}) {
  return (
    <div className="text-center">
      <button
        type={type}
        disabled={disabled || loading}
        className={`${color} ${width} ${bg} ${paddingX} ${paddingY} ${marginT} w-full
        transition-all duration-500 ease-in-out rounded-[56px] cursor-pointer font-Roboto text-[32px] font-extrabold leading-[43.2px]
        ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {loading ? <div className="main-loader mx-auto"></div> : name}
      </button>
    </div>
  );
}

export default CustomButton;
