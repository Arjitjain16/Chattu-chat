import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Home from "./pages/home/Home"
import Toaster from "react-hot-toast"
const App = () => {
  return (
    <div>
      {/* <Signup /> */}
      <Toaster/>
      {/* <Login/> */}
      <Home/>
    </div>
  )
}

export default App