
import {useAuthContext} from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime";
import useZConversation from '../../zustand/useZConversation';

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useZConversation();
	const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	// const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs text-zinc-300 flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
};

export default Message;
