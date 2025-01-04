import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Footer from "./Footer";
import Header from "./Header";
import MainContentWrapper from "./MainContentWrapper";

const Adminlayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    toast.success("Logout successfully!");
  };
  return (
    <>
      <MainContentWrapper>
        <Header />
        <main>
          <button onClick={handleLogout}>Logout</button>
          {children}
        </main>

        <Footer
          title="Contact Info"
          size="text-[3rem]"
          color="text-black"
          fontWeight="font-bold"
        />
      </MainContentWrapper>
    </>
  );
};

export default Adminlayout;
