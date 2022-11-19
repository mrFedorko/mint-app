import { retranslate } from "../../../services/retranslate";

export const ChatMessage = (props) =>  {
    
    const {rtlData} = retranslate();
    
    const {from, text, date, like} = props
    let style;

    if(from && from === 'admin'){
        style = "chat__message chat__message-answer"
    } else {
        style = 'chat__message chat__message-question'
    }
    
    return(
            <div className={style}>
                <p className="chat__message-text">{text}</p>
                <p className="chat__message-time chat__message-time-left">{rtlData(date, true)}</p>
            </div>        
    )
}