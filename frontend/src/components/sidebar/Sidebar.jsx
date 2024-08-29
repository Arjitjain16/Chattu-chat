import React from 'react';
import SearchInput from './SearchInput';
import Conversation from './Conversation';
import Logout from './Logout';

function Sidebar() {
  return (
    <div className='w-[40%] h-full border-r border-slate-800 px-7 py-4 flex flex-col '>
      <SearchInput />
      <div className='divider py-2 px-1 border-b-1 border-slate-200'></div>
      <Conversation />
      <Logout />
    </div>
  );
}

export default Sidebar;
