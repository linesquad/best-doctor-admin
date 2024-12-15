export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

// login validations ---
export const validateEmail = (value, setEmailError) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    setEmailError("Please enter a valid email address.");
    return false;
  } else {
    setEmailError("");
    return true;
  }
};

export const validatePassword = (value, setPasswordError) => {
  const passwordMinLength = 6;
  if (value.length < passwordMinLength) {
    setPasswordError(
      `Password must be at least ${passwordMinLength} characters.`
    );
    return false;
  } else {
    setPasswordError("");
    return true;
  }
};
// remake arrow functions to named function expresions
