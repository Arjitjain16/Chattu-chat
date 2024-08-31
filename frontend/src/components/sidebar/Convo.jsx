function Convo({ conversation, lastIdx, emoji}) {
  return (
    <div className="flex items-center justify-between w-full hover:bg-[#0EA5EA] rounded px-2 py-2 cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="avatar online placeholder">
          <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
            <img src={conversation.profilePic} alt={`${conversation.fullName}'s avatar`} />
          </div>
        </div>
        <h1 className="text-white">{conversation.fullName}</h1>
      </div>
      <div>
        <span className="text-xl">{emoji}</span>
      </div>
    </div>
  );
}

export default Convo;
