import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Footer from "./Footer";
import MainContentWrapper from "./MainContentWrapper";
import Navbar from "./Navbar";
import Services from "./Services";
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
          />
        </MainContentWrapper>
      </header>
      <main>
        <MainContentWrapper>
          <button onClick={handleLogout}>Logout</button>
          {children}
        </MainContentWrapper>
        <MainContentWrapper>
          <Services />
        </MainContentWrapper>
      </main>
      <footer>
        <Footer
          title="Contact Info"
          size="text-[3rem]"
          color="text-black"
          fontWeight="font-bold"
        />
      </footer>
    </>
  );
};

export default Adminlayout;
