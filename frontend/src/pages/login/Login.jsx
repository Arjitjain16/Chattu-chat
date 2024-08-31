
import { useState } from 'react';
import { Link} from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

function Login() {
   
 

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

  return (
    <div className='flex flex-col items-center justify-center h-[100vh] w-96 mx-auto py-72'>
      <div className='w-full p-6 rounded-lg  shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 mb-5'>
            Login <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label className='lablel p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your Name' className='bg-[#171B20] text-white h-10 w-full input input-bordered m-1.5' />
            </div>
            <div>
                <label className='lablel p-2'>
                    <span className='text-base label-text'>Password</span>
                </label> 
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' className='bg-[#171B20] text-white h-10 w-full input input-bordered m-1.5' />
            </div>
            <Link to="/signup" className="link link-secondary m-1.5 text-white mb-2">Not have any account</Link>
            <div>
           <button className='bg-[#171B20] text-white h-10 w-full input input-bordered m-1.5'>
            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
           </button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
