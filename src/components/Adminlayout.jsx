import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

const Adminlayout = ({ children }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Me" },
    { path: "/education", name: "Education" },
    { path: "/experience", name: "Experience" },
    { path: "/skills", name: "Skills" },
    { path: "/awards", name: "Awards" },
  ];
  return (
    <>
    <header>
      <Navbar links={navLinks}/>
    </header>
    <main>
      <button onClick={handleLogout}>Logout</button>
      {children}
    </main>
    </>
  );
};

export default Adminlayout;
