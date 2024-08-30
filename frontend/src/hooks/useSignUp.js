import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios"

const useSignUp = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullName,
    username,
    password,
    confirmedPassword,
    gender,
  }) => {
    // Validate input fields
    const isValid = handleInputErrors({
      fullName,
      username,
      password,
      confirmedPassword,
      gender,
    });
    if (!isValid) return;

    setLoading(true);
    try {
      const { data } = await axios.post("/api/auth/signup", {
        fullName,
        username,
        password,
        confirmedPassword,
        gender,
      });

      console.log(data)

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
    } catch (error) {
      // Check if error has response object for more detailed error info
      const errorMessage =
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : error.message;
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };


  return { loading, signup };
};

export default useSignUp;

// Function to handle input validation
function handleInputErrors({
  fullName,
  username,
  password,
  confirmedPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmedPassword || !gender) {
    toast.error("All fields are required.");
    return false;
  }
  if (password !== confirmedPassword) {
    toast.error("Passwords do not match.");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password should be at least 6 characters long.");
    return false;
  }
  return true;
}
