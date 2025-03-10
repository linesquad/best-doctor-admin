import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MotionNav from "./MotionNav";
import ToggleButton from "../ToggleButton";

import DoctorLogo from "/images/doctorLogo.jpg";

const Navbar = ({ paddingX, paddingY, bgColor, links, ActiveBg, logout }) => {
  const [clickMenu, setClickMenu] = useState(false);
  const navigate = useNavigate();
  function toggleMenu() {
    setClickMenu((prev) => !prev);
  }

  // this automatically closes the burger menu when the screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setClickMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // this disables srcoll effect when burger is open

  useEffect(() => {
    if (clickMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [clickMenu]);

  return (
    <nav
      className={`flex items-center justify-between ${bgColor} ${paddingY} ${paddingX} relative`}
    >
      <img
        src={DoctorLogo}
        className="w-16 h-16 rounded-full cursor-pointer"
        alt="Doctor Logo"
        onClick={() => {
          navigate("/"),
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
        }}
      />

      <ToggleButton toggleMenu={toggleMenu} clickMenu={clickMenu} />

      <MotionNav
        links={links}
        ActiveBg={ActiveBg}
        toggleMenu={toggleMenu}
        clickMenu={clickMenu}
        bgColor={bgColor}
        logout={logout}
      />
    </nav>
  );
};

export default Navbar;
