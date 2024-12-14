import { useNavigate } from "react-router-dom";

import MainContentWrapper from "./MainContentWrapper";
import Navbar from "./Navbar";
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
        <MainContentWrapper>
          <Navbar
            links={navLinks}
            bgColor="bg-darkBlue"
            ActiveBg="bg-lightBlue"
            paddingX="px-4"
            paddingY="py-4"
          />
        </MainContentWrapper>
      </header>
      <main>
        <MainContentWrapper>
          <button
            onClick={handleLogout}
          >
            Logout
          </button>
          {children}
        </MainContentWrapper>
      </main>
    </>
  );
};

export default Adminlayout;
