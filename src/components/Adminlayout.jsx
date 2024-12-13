import { useNavigate } from "react-router-dom";

import Navbar from "./NavBar";
import { navLinks } from "../lib/navLinks";

const Adminlayout = ({ children }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <header>
        <Navbar links={navLinks} bgColor={"bg-lightBrown"} />
      </header>
      <main>
        <button onClick={handleLogout}>Logout</button>
        {children}
      </main>
    </>
  );
};

export default Adminlayout;
