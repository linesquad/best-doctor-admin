import { motion } from "framer-motion";
import { useState } from "react";

import MotionNav from "./MotionNav";
import DoctorLogo from "../../public/images/doctorLogo.jpg";

const Navbar = ({ paddingX, paddingY, bgColor, links, ActiveBg }) => {
  const [clickMenu, setClickMenu] = useState(false);

  function toggleMenu() {
    setClickMenu((prev) => !prev);
  }

  return (
    <nav
      className={`flex items-center justify-between ${bgColor} ${paddingY} ${paddingX} relative`}
    >
      <img
        src={DoctorLogo}
        className="w-16 h-16 rounded-full"
        alt="Doctor Logo"
      />

      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 relative z-20"
        aria-label="Toggle menu"
      >
        <motion.div
          animate={clickMenu ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
          className="bg-white h-[2px] w-6 mb-1"
        />
        <motion.div
          animate={clickMenu ? { opacity: 0 } : { opacity: 1 }}
          className="bg-white h-[2px] w-6 mb-1"
        />
        <motion.div
          animate={clickMenu ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="bg-white h-[2px] w-6"
        />
      </button>

      <MotionNav
        links={links}
        ActiveBg={ActiveBg}
        toggleMenu={toggleMenu}
        clickMenu={clickMenu}
        bgColor={bgColor}
      />
    </nav>
  );
};

export default Navbar;
