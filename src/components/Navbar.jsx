import { useState } from "react";
import { NavLink } from "react-router-dom";

import DoctorLogo from "../../public/images/doctorLogo.jpg";

const Navbar = ({ links, paddingX, paddingY, ActiveBg, bgColor }) => {
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
        className="lg:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      <ul
        className={`flex flex-col items-center justify-center gap-12 lg:flex-row lg:justify-end lg:static absolute ${bgColor} w-full top-[96px] left-0 transition-all duration-500 h-screen lg:h-auto ${
          clickMenu
            ? "translate-y-0"
            : "opacity-0 translate-y-100 lg:opacity-100"
        }`}
      >
        {links.map((link) => (
          <li key={link.id} className="text-white">
            <NavLink
              to={link.path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? `rounded-lg py-2 px-4 w-full ${ActiveBg}`
                  : "py-2 px-4"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        {/* make navItems in NavItems component and render here */}
        {/* add motion animation and make work nav on mobile and tablet */}
      </ul>
    </nav>
  );
};

export default Navbar;
