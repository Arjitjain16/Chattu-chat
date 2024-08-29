import React from 'react';
import Convo from './Convo';

function Conversation() {
  return (
    <div className='h-full flex flex-col overflow-auto gap-1'>
      <Convo />
      <Convo />
      <Convo />
      <Convo />
      <Convo />
    </div>
  );
}

export default Conversation;
