import { useState } from "react";
import toast from "react-hot-toast";
// import axios from "axios"

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
      const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, username, password, confirmedPassword, gender }),
			});
      console.log(res)
			const data = await res.json();
      
      if (data.error) throw new Error(data.error);
    
      localStorage.setItem("chat-user", JSON.stringify(data));
      toast.success("Successfully signed up!");  
    } catch (error) {
      toast.error("erro is comming",error.Message);
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
