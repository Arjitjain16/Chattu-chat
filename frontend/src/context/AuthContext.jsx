import { createContext, useContext, useState } from "react";

export  const AuthContext = createContext()

export const useAuthContext = ()=>{
    return useContext(AuthContext)  // returns the value of the current context provider
}

export const AuthContextProvider = ({Children}) =>{
    const [authUser, setauthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)
    return <AuthContext.Provider value={{authUser, setauthUser}}> 
        {Children}
    </AuthContext.Provider>
}