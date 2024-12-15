import { motion } from "framer-motion";

import NavItems from "./NavItems";

const MotionNav = ({ links, ActiveBg, toggleMenu, clickMenu, bgColor }) => {
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={clickMenu ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 right-0 ${bgColor} w-full h-screen lg:h-auto lg:static lg:translate-x-0 lg:w-auto z-10 lg:hidden`}
      >
        <ul
          className={`flex flex-col items-center justify-center h-full lg:flex-row lg:justify-end lg:items-center text-[2rem]`}
        >
          <NavItems
            links={links}
            ActiveBg={ActiveBg}
            toggleMenu={toggleMenu}
            bgColor={bgColor}
          />
        </ul>
      </motion.div>

      <div
        className={`lg:flex lg:justify-end lg:items-center ${bgColor} w-auto z-10 hidden lg:block`}
      >
        <ul className={`flex flex-row items-center justify-end`}>
          <NavItems
            links={links}
            ActiveBg={ActiveBg}
            toggleMenu={toggleMenu}
            bgColor={bgColor}
          />
        </ul>
      </div>
    </>
  );
};

export default MotionNav;
