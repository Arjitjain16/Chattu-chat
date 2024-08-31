import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Home from "./pages/home/Home"
import {  Toaster } from "react-hot-toast"
import {Navigate,  Route, Routes } from "react-router-dom"
import { useAuthContext } from "./context/AuthContext"
const App = () => {
  const {authUser} = useAuthContext()
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={authUser ? <Home/> : <Navigate to={"/login"}/>} />
        <Route path="/login" element={authUser ?  <Navigate to={"/"}/> : <Login/>} />
        <Route path="/signup" element={authUser ?  <Navigate to={"/"}/> : <Signup/>} />
        {/* <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} /> */}
      </Routes>
    </div>
  )
}

export default App