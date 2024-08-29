import React from 'react';

function Convo() {
  return (
    <div className='flex items-center justify-between w-full  hover:bg-sky-500 rounded px-2 py-2.5 cursor-pointer border-b-1 border-b-slate-400'>
        <div className='flex items-center gap-2 '>
            <div className='h-12 w-12 bg-white rounded-full flex justify-center items-center '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHQeTXx-J4LPb84GKWbDctqGQsAcibpp5kvMfXw-gIA&s" alt="Avatar" className='h-8 object-cover' />
            </div>
            <h1 className='text-white text-xl'>John Doe</h1>
        </div>
        <div>
            <span className='text-xl'>🎃</span>
        </div>
      
    </div>
  );
}

export default Convo;
