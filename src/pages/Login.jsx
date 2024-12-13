import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../service/auth";
import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";
function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await userLogin(email, password);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-[#CBDEEF] h-screen flex justify-center items-center">
      <div className="w-full">
      <h2 className="text-black text-center font-Poppins text-[64px] font-bold tracking-[-1.28px]">Welcome</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
       
          <CustomInput
             type="email"
             val={email}
             width="max-w-[800px]"
             placeholder="Email"
             bg="bg-ExtraLight-bg"
             paddingX="px-[13px]"
             paddingY="py-[13.5px]"
             color="text-black"
             onChange={(e) => setEmail(e.target.value)} 
             required
            />
          <CustomInput
            type="password"
            value={password}
            width="max-w-[800px]"
            placeholder="Password"
            bg="bg-ExtraLight-bg"
            paddingX="px-[13px]"
            paddingY="py-[13.5px]"
            color="text-black"
            val={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
       
        <CustomButton type="submit"
         paddingX={"px-4"} paddingY={"py-[14.5px]"} width={"w-[591px]"} hoverBg={"bg-red-200"} color={"text-white"} bg={"bg-[#07D]"} name={"Sign In"} marginT={"mt-10"} />
      </form>
      </div>
    </div>
  );
};

export default Login;
