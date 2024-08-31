import create from 'zustand';

const useConversation = create((set) => ({
  selectConversation: null,
  setSelectConversation: (selectedConversation) =>
    set({ selectConversation: selectedConversation }),
  messages: [],
  setMessages: (newMessages) => set({ messages: newMessages }),
}));

export default useConversation;