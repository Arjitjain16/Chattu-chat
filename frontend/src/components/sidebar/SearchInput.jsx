
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import useConversation from "../../hooks/useConversation";
import useZConversation from "../../zustand/useZConversation";
import toast from "react-hot-toast";

function SearchInput() {
  const [search, setSearch] = useState("")
  const {conversations} = useConversation()
  const {setSelectedConversation} = useZConversation()

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (!search) return
    if(search.length <3){
      toast.error("Search ,must be be atleast 3 charachters long")
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if (conversation) {
      setSelectedConversation(conversation)
      setSearch("")
    }else{
      toast.error("No conversation found")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex gap-2'>
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search.." className="w-[85%] px-6 input-bordered rounded-full bg-[#1C232A] text-white" />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchOutline className="h-6 w-6 font-bold" />
      </button>
      </form>
    </div>
  );
}

export default SearchInput;
