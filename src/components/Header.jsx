import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Navbar from "./Navbar";
import { navLinks } from "../lib/navLinks";
function Header() {
  const navigate = useNavigate();
  function LogoutHandler() {
    try {
      localStorage.removeItem("user");
      navigate("/login");
      toast.success("Logout Succesfully");
    } catch {
      toast.error("Something went wrong");
    }
  }
  return (
    <header className="sticky top-0 z-50">
      <Navbar
        links={navLinks}
        bgColor="bg-darkBlue"
        ActiveBg="bg-lightBlue"
        paddingX="px-4"
        paddingY="py-4"
        logout={LogoutHandler}
      />
    </header>
  );
}

export default Header;
