import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Toaster from "react-hot-toast"
const App = () => {
  return (
    <div>
      <Signup />
      <Toaster/>
    </div>
  )
}

export default App