import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetMessagesQuery, useSendMessageMutation } from "../../../store/api/messageApi"
import { ChatMessage } from "./chatMessage";

export const Chat = () => {

    const [message, setMessage] = useState('');
    const userId = useSelector(state=> state.auth)
    const {data, isLoading} = useGetMessagesQuery();
    const [sendMessage, {_}] = useSendMessageMutation();

    if(!data){
        return(
            <h3>Сообщений нет</h3>
        )
    }

    const messages = data.map(msg=>{
        const {time, text, sender} = msg
        return (
            <ChatMessage time = {time} text={text} sender={sender}/>
        )
    })

    const handleSendMsg = () => {
        if(!message || message.split('')
        .filter(item=> item !== ' ')
        .length === 0){
            return 
        }
        const body = {
            text: message,
            time: Date.now(),
            sender: 'user',
            owner: userId,
        }
        sendMessage(body)
    }


    return(
        <div className="chat">
            {isLoading ? <h3>Загрузка сообщений...</h3> : {messages}}
            <div className="chat__input-group">
                <input 
                    type="text" 
                    className="chat__input"
                    onChange={(e) => setMessage(e.target.value)} 
                />
                <button 
                    className="chat__btn"
                    onclick = {handleSendMsg}
                />
            </div>
        </div>
    )
}