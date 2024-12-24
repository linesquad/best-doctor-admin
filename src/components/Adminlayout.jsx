import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import MainContentWrapper from "./MainContentWrapper";
import Navbar from "./Navbar";
import { navLinks } from "../lib/navLinks";

const Adminlayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    toast.success("Logout successfully!");
  };
  return (
    <>
      <header>
        <MainContentWrapper>
          <Navbar
            links={navLinks}
            bgColor="bg-darkBlue"
            ActiveBg="bg-lightBlue"
            paddingX="px-4"
            paddingY="py-4"
            Logout={handleLogout}
          />
        </MainContentWrapper>
      </header>
      <main>
        <MainContentWrapper>{children}</MainContentWrapper>
      </main>
    </>
  );
};

export default Adminlayout;
