export const ChatMessage = (props) =>  {
    let style;

    if(props.sender && props.sender === 'admin'){
        style = 'chat-message__wrapper_admin'
    } else {
        style = 'chat-message__wrapper_user'
    }
    
    return(
        <div className={style} key = {props.time}>
            <p className="chat-message__time">{props.time}</p>
            <p className="chat-message__message">{props.text}</p>
            <button className="note__fav">отметить</button>
        </div>
    )
}