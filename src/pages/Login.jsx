import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { userLogin } from "../service/auth";

import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";

import { toast } from "react-toastify";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordMinLength = 6;

    let isValid = true;

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    if (password.length < passwordMinLength) {
      setPasswordError(
        `Password must be at least ${passwordMinLength} characters.`
      );
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    try {
      const user = await userLogin(email, password);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
      toast.success("Login successful!");
    } catch (err) {
      setPasswordError(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="bg-softBlue h-screen flex justify-center items-center extraSm:px-2 md:px-0">
      <div className="w-full">
        <h2 className="text-black text-center font-Poppins foldSm:text-[64px] font-bold tracking-[-1.28px] extraSm:text-[45px]">
          Welcome
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <CustomInput
              type="email"
              val={email}
              width="max-w-[800px]"
              placeholder="Email"
              bg="bg-lightTransparent"
              paddingX="px-[13px]"
              paddingY="py-[13.5px]"
              color="text-semiTransparent"
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            {emailError && (
              <p className="text-red-500 text-center pt-3">{emailError}</p>
            )}
          </div>

          <div>
            <CustomInput
              type="password"
              value={password}
              width="max-w-[800px]"
              placeholder="Password"
              bg="bg-lightTransparent"
              paddingX="px-[13px]"
              paddingY="py-[13.5px]"
              color="text-semiTransparent"
              val={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="currect-password"
            />
            {passwordError && (
              <p className="text-red-500 text-center pt-3">{passwordError}</p>
            )}
          </div>

          <CustomButton
            type="submit"
            paddingX={"px-4"}
            paddingY={"py-[14.5px]"}
            width={"max-w-[591px]"}
            color={"text-white"}
            bg={"bg-lightBlue"}
            name={"Sign In"}
            marginT={"mt-10"}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;

