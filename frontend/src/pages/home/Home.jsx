
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';



function Home() {
  return (
    <div className='h-[97vh] w-full flex items-center justify-center'>
      <div className='flex w-[65%]   sm:h-[450px] md:h-[550px] rounded-xl overflow-hidden bg-gray-400 
      bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
}

export default Home;
