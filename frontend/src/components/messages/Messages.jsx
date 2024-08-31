
import useGetMessages from '../../hooks/useGetMessages';
import Message from './Message';
import MessageSkeleton from "../skeletons/MessageSkeleton";
import { useEffect, useRef } from 'react';

function Messages() {
  const { loading, messages } = useGetMessages()
  console.log("messages",messages)

  const lastMessageRef = useRef()

  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

  return (

    <div className='p-4 flex-1 overflow-auto'>
      {!loading && messages.length >0 && messages.map((message) =>(
        <div key={message._id}>
          <Message message={message} />
        </div>
      ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center text-white'>Send a message to start the conversation</p>
			)}
    </div>
  );
}

export default Messages;
