
import { IoSearchOutline } from "react-icons/io5";

function SearchInput() {
  return (
    <div>
      <form action="" className='flex gap-2'>
      <input type="text" placeholder="Search.." className="w-[85%] px-6 input-bordered rounded-full bg-[#1C232A] text-white" />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchOutline className="h-6 w-6 font-bold" />
      </button>
      </form>
    </div>
  );
}

export default SearchInput;
