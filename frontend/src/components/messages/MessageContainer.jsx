import { TbMessages } from "react-icons/tb";
import Messages from './Messages';
import MessageInput from './MessageInput';
import useZConversation from "../../zustand/useZConversation";
import { useEffect } from "react";

function MessageContainer() {
  const { 	selectedConversation, setSelectedConversation } = useZConversation();

  useEffect(()=>{
    return  ()=> setSelectedConversation (null)
  }, [setSelectedConversation ])

  return (
    <div className='w-[60%] md:min-w-[450px] flex flex-col'>
      {	selectedConversation ? (
        <>
          <div className="navbar bg-[#64728A]">
            <a className="btn btn-ghost text-xl text-slate-400">
              To: <span className='font-bold text-xl text-blue-950'>{selectedConversation.fullName}</span>
            </a>
          </div>

          <Messages />
          <MessageInput />
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
}

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 John ❄</p>
        <p>Select a chat to start messaging</p>
        <TbMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};

export default MessageContainer;