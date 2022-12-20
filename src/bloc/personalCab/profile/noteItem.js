import { useState, useEffect } from "react";
import { retranslate } from "../../../services/retranslate"
import { SVGbookmarkStart } from "../../../svg/svg";
import { SVGtrash } from "../../../svg/svg";

export const NoteItem = (props) => {
    
    const [descr, setDescr] = useState('');
    const [liked, setLiked] = useState(false)

    const {rtlData} = retranslate(); 

    const noteListId = props.noteListId
    const target = props.target
    const item = props.item

    useEffect(() => {
        setLiked(item.like)
    }, [item])

    return(
        <div 
        className={item.isRecent ? "note note__new" : "note"} 
        key = {item._id}
        onMouseEnter = {() => {
           if(item.isRecent === true) {props.noteRecent({noteListId, target})}
        }}
    >
        <p className="note__message">{item.text}</p>
        {!item.deleted && <div className="note__act-wrap">
            <button className="note__act" 
                onClick={() => props.noteDelete({noteListId, target})}
                onMouseEnter = {() => setDescr('Удалить')}
                onMouseLeave = {()=> setDescr('')}
            >
                <SVGtrash/>
            </button>
            <button className="note__act" 
                onClick={() => {props.noteLiked({noteListId, target}); setLiked()}}
                onMouseEnter = {() => setDescr('В избранное')}
                onMouseLeave = {()=> setDescr('')}
            > 
                <SVGbookmarkStart liked={liked}/>    
            </button>
            <div className="note__icons-descr fadein">{descr}</div>
        </div>}
        <p className="note__time">{rtlData(item.date, true)}</p>
    </div>
    )
}