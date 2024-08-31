
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

function Logout() {
  const {loading , logout} = useLogout()
  return (
    <div className='mt-auto'>
      {
        !loading? (<BiLogOut className='text-white text-3xl cursor-pointer' onClick={logout}/>) :
        (<span className="loading loading-spinner"></span>)
        
      }
    </div>
  );
}

export default Logout;
