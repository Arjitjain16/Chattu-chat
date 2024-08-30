import React from 'react';

function Convo() {
  return (
    <div className='flex items-center justify-between w-full  hover:bg-[#0EA5EA] rounded px-2 py-2 cursor-pointer '>
        <div className='flex items-center gap-2 '>
        <div className=" avatar online placeholder">
          <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
            <h1 className='text-white'>John Doe</h1>
        </div>
        <div>
            <span className='text-xl'>🎃</span>
        </div>
      
    </div>
  );
}

export default Convo;
