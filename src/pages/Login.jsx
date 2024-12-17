import { useState } from "react";

import useLoginMutation from "../hooks/useLoginMutation";
import { validateEmail, validatePassword } from "../lib/helpers";
import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { mutate, isLoading } = useLoginMutation();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError) {
      validateEmail(value, setEmailError);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (passwordError) {
      validatePassword(value, setPasswordError);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email, setEmailError);
    const isPasswordValid = validatePassword(password, setPasswordError);

    if (isEmailValid && isPasswordValid) {
      mutate({ email, password });
    }
  };
  console.log(isLoading)
  return (
    <div className="bg-softBlue h-screen flex justify-center items-center extraSm:px-2 md:px-0">
      <div className="w-full">
        <h2 className="text-black text-center font-Poppins foldSm:text-[64px] font-bold tracking-[-1.28px] extraSm:text-[45px]">
          Welcome
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <CustomInput
              name="email"
              value={email}
              width="max-w-[800px]"
              placeholder="Email"
              bg="bg-lightTransparent"
              paddingX="px-[13px]"
              paddingY="py-[13.5px]"
              color="text-semiTransparent"
              autoComplete="email"
              onChange={handleEmailChange}
            />
            {emailError && (
              <p className="text-red-500 text-center pt-3">{emailError}</p>
            )}
          </div>

          <div>
            <CustomInput
              type="password"
              name="password"
              value={password}
              width="max-w-[800px]"
              placeholder="Password"
              bg="bg-lightTransparent"
              paddingX="px-[13px]"
              paddingY="py-[13.5px]"
              color="text-semiTransparent"
              autoComplete="current-password"
              onChange={handlePasswordChange}
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
            disabled={isLoading}
            loading={isLoading}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
