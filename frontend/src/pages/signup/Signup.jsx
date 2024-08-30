import { useState } from 'react';
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';

function Signup() {

    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmedPassword: "",
        gender: ""
    });

    const { loading, signup } = useSignUp(); 

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs); // Call signup function
    };
    

    return (
        <div className='h-[100vh] md:w-full lg:w-full flex flex-col items-center justify-center px-4 py-10 sm:p-48 mx-auto'>
            <div className='w-[40vw] md:w-[35vw] lg:w-[30vw] p-3 md:p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='md:text-3xl lg:text-3xl text-xl font-semibold text-center text-gray-300 mb-5'>
                    Signup <span className='text-blue-500'>ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit} className='w-[48vw] md:w-[40vw] lg:w-[40vw]'>
                    <div className='w-[65%] flex flex-col'>
                        <label className='label p-2'>
                            <span className='text-base label-text'>FullName</span>
                        </label>
                        <input type="text" placeholder='Enter your Name' className='bg-[#171B20] text-white h-10 w-full input input-bordered m-1.5'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div className='w-[65%] flex flex-col'>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter your user Name' className='bg-[#171B20] text-white h-8 md:h-10 lg:h-10 w-full input input-bordered m-1.5'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>
                    <div className='w-[65%] flex flex-col'>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter your Password' className='bg-[#171B20] text-white h-10 w-full input input-bordered m-1.5'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div className='w-[65%] flex flex-col'>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Enter your Confirm Password' className='bg-[#171B20] text-white h-10 input input-bordered m-1.5'
                            value={inputs.confirmedPassword}
                            onChange={(e) => setInputs({ ...inputs,  confirmedPassword: e.target.value })}
                        />
                    </div>
                
                    <GenderCheckbox oncheckboxChnge={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to="/login" className="link link-secondary m-1.5 text-white">Already have an account?</Link>

                    <div className='w-[65%] flex flex-col'>
                        <button className='btn btn-block btn-sm mt-2 py-2 h-10 border border-slate-700 bg-[#171B20] text-white'>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default Signup;
