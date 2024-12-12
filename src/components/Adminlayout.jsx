import { useNavigate } from "react-router-dom";

const Adminlayout = ({ children }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <main>
      <button onClick={handleLogout}>Logout</button>
      {children}
    </main>
  );
};

export default Adminlayout;
