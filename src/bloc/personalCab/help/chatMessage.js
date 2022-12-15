import { retranslate } from "../../../services/retranslate";

export const ChatMessage = (props) =>  {
    
    const {rtlData} = retranslate();
    
    const insertNewLine = (text) => {
        const msg = text.split('\n').filter(item=> item !== '').map(item=> {  
            return (
                <>
                    {item}
                    <br/>
                </>
            )
        })
        return msg        
    }

    const {from, text, date, like} = props
    let style;

    if(from && from === 'admin'){
        style = {wrap: "chat__message chat__message-answer animate__animated animate__backInLeft", time: "chat__message-time chat__message-time-left"}
    } else {
        style = {wrap: "chat__message chat__message-question animate__animated animate__backInRight", time: "chat__message-time chat__message-time-right"}
    }
    
    return(
            <div className={style.wrap}>
                <p className="chat__message-text">{insertNewLine(text)}</p>
                <p className={style.time}>{rtlData(date, true)}</p>
            </div>        
    )
}