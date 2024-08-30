import React from 'react';
import { IoMdSend } from "react-icons/io";

function MessageInput() {
  return (
    <div className='px-2'>
      <form action="" className='border-none outline-none w-[100%]'>
        <div className=' w-[100%]  flex items-center justify-between border-none outline-none relative p-3'> 
        <input type="text" placeholder="Send a message" className="w-full py-4 px-2 rounded-md  border-none outline-none bg-[#2B333F] text-white" />
        <button type="submit" className=" text-white absolute right-6 h-28 "><IoMdSend className='text-slate-400 ' /></button>
        </div>
      </form>
    </div>
  );
}

export default MessageInput;
