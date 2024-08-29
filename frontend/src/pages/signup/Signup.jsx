import  { useState } from 'react';
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';

function Signup() {
    const [inputs,setInputs] = useState({
        fullName : "",
        username : "",
        password : "",
        confirmedPassword : "",
        gender : ""
    })

    const {loading , signup} =  useSignUp
    const handleSumit = (e)=>{
        e.preventDefault()          
        console.log(inputs)
    }
    const handlecheckboxChange = (gender)=>{
        setInputs({...inputs, gender})
    }

  return (
    <div className='flex flex-col items-center justify-center h-full p-48 w-1/2 mx-auto mt-8'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300 mb-5'>
            Signup <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form action="" onSubmit={handleSumit} className=''>
            <div>
                <label className='lablel p-2'>
                    <span className='text-base label-text'>FullName</span>
                </label>
                <input type="text" placeholder='Enter your Name' className='h-10 w-full input input-bordered m-1.5'
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                />
            </div>
            <div>
                <label className='lablel p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type="text" placeholder='Enter your user Name' className='h-10 w-full input input-bordered m-1.5'
                 value={inputs.username}
                 onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                />
            </div>
            <div>
                <label className='lablel p-2'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input type="password" placeholder='Enter your Pasword' className='h-10 w-full input input-bordered m-1.5' 
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                />
            </div>
            <div className='flex flex-col'>
                <label className='lablel p-2'>
                    <span className='text-base label-text'>Confirm Password</span>
                </label>
                <input type="text" placeholder='Enter your Confirm Password' className='h-10 input input-bordered m-1.5' 
                value={inputs.confirmedPassword}
                onChange={(e) => setInputs({ ...inputs, confirmedPassword: e.target.value })}
                />
            </div>

            <GenderCheckbox oncheckboxChnge= {handlecheckboxChange} selectedGender= {inputs.gender} />

            <Link to={"/login"} className="link link-secondary m-1.5 text-white">Already have account</Link>
            <div className='h-full'>
                <button className='btn btn-block btn-sm mt-2 py-2 border border-slate-700' disabled={loading}>
                    {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                </button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;


// starter code 

// import React from 'react';
// import GenderCheckbox from './GenderCheckbox';
// import { Link } from 'react-router-dom';

// function Signup() {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//       <h1 className='text-3xl font-semibold text-center text-gray-300 mb-5'>
//             Signup <span className='text-blue-500'> ChatApp</span>
//         </h1>

//         <form action="">
//             <div>
//                 <label className='lablel p-2'>
//                     <span className='text-base label-text'>FullName</span>
//                 </label>
//                 <input type="text" placeholder='Enter your Name' className='h-10 w-full input input-bordered m-1.5' />
//             </div>
//             <div>
//                 <label className='lablel p-2'>
//                     <span className='text-base label-text'>Password</span>
//                 </label>
//                 <input type="password" placeholder='Enter your Pasword' className='h-10 w-full input input-bordered m-1.5' />
//             </div>
//             <div>
//                 <label className='lablel p-2'>
//                     <span className='text-base label-text'>Confirm Password</span>
//                 </label>
//                 <input type="text" placeholder='Enter your Confirm Password' className='h-10 w-full input input-bordered m-1.5' />
//             </div>

//             <GenderCheckbox />

//             <Link to={"/login"} className="link link-secondary m-1.5 text-white">Already have account</Link>
//             <div>

//            <button className='bg-white h-10 w-full input input-bordered m-1.5'>Login</button>
//             </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;
