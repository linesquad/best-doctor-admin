import { NavLink } from "react-router-dom";

const Navbar = ({ links }) => {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.id} className="text-black">
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "text-green-400" : "")}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
