import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Home from "./pages/home/Home"
import {  Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default App