import { useNavigate } from "react-router-dom";

import MainContentWrapper from "./MainContentWrapper";
import Navbar from "./Navbar";
import { navLinks } from "../lib/navLinks";

import { toast } from "react-toastify";

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
          <Navbar links={navLinks} />
        </MainContentWrapper>
      </header>
      <main>
        <MainContentWrapper>
          <button onClick={handleLogout}>Logout</button>
          {children}
        </MainContentWrapper>
      </main>
    </>
  );
};

export default Adminlayout;
