import { useState } from "react";
import toast from "react-hot-toast";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullName,
    username,
    password,
    confirmedPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmedPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          gender,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (loading , signup);
};

export default useSignUp;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmedPassword,
  gender,
}) {
  if (
    !fullName ||
    !username ||
    !password ||
    !confirmedPassword ||
    !gender
  ) {
    toast.error("Fill this field");
    return false;
  }
  if (password !== confirmedPassword) {
    toast.error("Password does not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password should be at least 6 characters long");
    return false;
  }
  return true;
}