import ReusableTitle from "./ReusableTitle";

function Footer({ title, size, color, fontWeight }) {
  return (
    <div className=" px-[4.19rem] py-[3.15rem] bg-lightSkyBlue">
      <ReusableTitle title={title} size={size} color={color} fontWeight={fontWeight} />
    </div>
  );
}

export default Footer;

