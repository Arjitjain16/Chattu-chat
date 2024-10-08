import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function useLogout() {
  const [loading, setLoading] = useState(false);

  const {setauthUser} = useAuthContext()

  const logout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json()
      console.log(data)
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user")
      setauthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {loading, logout }; // Return the function and loading state
}

export default useLogout;
