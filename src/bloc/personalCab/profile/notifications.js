import { useSelector } from "react-redux";
import { useGetNotesQuery } from "../../../store/api/notesApi"

import './notifications.scss'

export const Notifications = () => {
    
    const {userId} = useSelector(state=> state.auth)
    const {data, isLoading} = useGetNotesQuery(userId);

    

    if(isLoading){return(<h2>Загрузка уведомлений...</h2>)}
    
    if(!data || data.length === 0){
        return(
            <h2>
                Уедомлений нет
            </h2>
        )
    }
    
   


    const content = (data.map((item) => {
        return(
            <div className="note" key = {item.time}>
                <p className="note__time">{item.time}</p>
                <p className="note__message">{item.message}</p>
                <button className="note__trash">удалить</button>
                <button className="note__fav">отметить</button>
            </div>
            )
    } ))

    return content
    
    

}

