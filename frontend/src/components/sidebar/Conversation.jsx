
  import useConversation from '../../hooks/useConversation';
  import Convo from './Convo'; 
  import {getRandomEmoji} from "../../utils/emoji"

  function Conversation() {
    const {loading , conversations} = useConversation()
    return (
      <div className='h-full flex flex-col overflow-auto gap-1'>
        {conversations.map((conversation, idx) => (
				<Convo
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

        {loading ? <span className='loading laoding-spinner mx-auto'></span> : null}
      </div>
    );
  }

  export default Conversation;
