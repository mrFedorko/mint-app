
import { ChatMessage } from "./chatMessage";
import { useState } from "react";
import {  useSelector } from "react-redux";
import { wsConnection } from "../../../store/ws/ws";
import { useGetAllMessagesQuery } from "../../../store/api/chatApi";
import { useEffect, useRef } from "react";


export const Chat = () => {
    const {userId} = useSelector(state=>state.auth)
    const [message, setMessage] = useState('');
    const [allMessages, setAllMessages] = useState([]);
    const {data, isLoading, isSuccess, isError} = useGetAllMessagesQuery(userId);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if(data && isSuccess){
            setAllMessages(data.currentChat.messages.map((item) => {
                const {from, text, date, like, _id} = item;
                return <ChatMessage key={_id} from={from}  text={text} date={date} like={like} />
            }))
        }
    }, [data, isSuccess])
    

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
        setMessage('');

        return false;
    };

    wsConnection.addEventListener('message', (event) => {
        const {from, text, date, like, _id} = JSON.parse(event.data);
        console.log(text)
        const newMessage = <ChatMessage key={_id} from={from}  text={text} date={date} like={like} />
        setAllMessages([...allMessages, newMessage]);
    });

    useEffect( () => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth', block: "nearest"});
    }, [allMessages])
    

 

    const content = {
        'noMessages': <div className="chat">
                              
                            <div className="chat__block-heading">
                                <div className="chat__block-title">Чат</div>
                                <div className="chat__block-heading-shadow"></div>
                            </div>
                            <div className="chat__messages">
                                <h5>Нет сообщений.</h5>
                                {allMessages}

                            </div>

                            <div className="chat__bottom">
                                <div className="chat__input-group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-file-plus" viewBox="0 0 16 16">
                                        <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/>
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                                    </svg>
                                    <textarea 
                                        value={message}
                                        type="text" 
                                        className="chat__input-text"  
                                        placeholder="Напишите нам..."
                                        onChange={(e)=> {setMessage(e.target.value)}}
                                    />
                                    <button 
                                        className="chat__send"
                                        onClick={handleMsg}
                                    >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                                            </svg>
                                    </button>
                                </div>
                            </div>
                        </div>,
        'isError':  <div className="chat">      
                        <div className="chat__block-heading">
                            <div className="chat__block-title">Чат</div>
                            <div className="chat__block-heading-shadow"></div>

                        </div>
                        <h4>Произошла ошибка, <br/>поробуйте обновить страницу</h4>
                    </div>,
        'isLoading':    <div className="chat">
                              
                            <div className="chat__block-heading">
                                <div className="chat__block-title">Чат</div>
                                <div className="chat__block-heading-shadow"></div>

                            </div>
                            <h4>Загрузка сообщений...</h4>
                        </div>,
        'isSuccess':  <div className="chat">
                              
                        <div className="chat__block-heading">
                            <div className="chat__block-title">Чат</div>
                            <div className="chat__block-heading-shadow"></div>

                        </div>
                        <div className="chat__messages">

                            {allMessages}
                            <div className="" ref={bottomRef}></div>
                        </div>

                        <div className="chat__bottom">
                        <div className="chat__bottom-shadow"></div>

                            <div className="chat__input-group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" class="bi bi-file-plus" viewBox="0 0 16 16">
                                    <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/>
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                                </svg>
                                <textarea 
                                    value={message}
                                    type="text" 
                                    className="chat__input-text"  
                                    placeholder="Напишите нам..."
                                    onChange={(e)=> {setMessage(e.target.value)}}
                                />
                                <button 
                                    className="chat__send"
                                    onClick={handleMsg}
                                >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                                        </svg>
                                </button>
                            </div>
                        </div>
                    </div>,
    }

   
    


    return(
        !data ? content.noMessages:
        isLoading ? content.isLoading:
        isError ? content.isError:
        isSuccess ? content.isSuccess:
        <></>
    )
}