
import { ChatMessage } from "./chatMessage";
import { useState } from "react";
import { useSelector } from "react-redux";
import { wsConnection } from "../../../store/ws/ws";
import { useEffect } from "react";
import { useGetAllMessagesQuery } from "../../../store/api/chatApi";


export const Chat = () => {
    const {userId} = useSelector(state=>state.auth)
    const [message, setMessage] = useState('');
    const {data, isLoading, isSuccess, isError} = useGetAllMessagesQuery(userId);
    
    

  


    
    const handleMsg = async (event) => {
        if(!message || message.split('').filter(item=> item !== ' ').length === 0){
            return
        }
        const body = {
            text: message,
            date: Date.now(),
            owner: userId,
            from: 'user'
        }
        
        wsConnection.send(JSON.stringify(body));
        setMessage('')

        return false;
    };
 


    return(
        <div className="chat">
             <h3>Загрузка сообщений...</h3> 
            <div className="chat__input-group">
                <input 
                    type="text" 
                    className="chat__input"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    
                />
                <button 
                    className="chat__btn"
                    children="отправить"
                    onClick = {handleMsg}
                />
            </div>
        </div>
    )
}