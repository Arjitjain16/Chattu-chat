import { useState } from "react";
import toast from "react-hot-toast";

function useLogout() {
  const [loading, setLoading] = useState(false);

//   const {setAuthuser} = useAuthContext()

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
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user")
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {loading, logout }; // Return the function and loading state
}

export default useLogout;
