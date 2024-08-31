import {  useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useConversation = () => {
 const [loading, setLoading] = useState(false)
 const [conversations, setConversations] = useState([])

 useEffect(()=>{
    const getconversation = async () =>{
        setLoading(true)
        try{
            const res = await fetch("/api/users")
            const data = await res.json()
            if(data.error){
                throw new Error('Error fetching conversation')
            }
            setConversations(data)
        }catch(error){
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    getconversation()
 },[conversations])
 
 return { loading, conversations }
 
}

export default useConversation