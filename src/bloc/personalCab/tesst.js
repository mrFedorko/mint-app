// function calcSum(a, b, c, d, e) {
//     const sum = a*b*3;
//     console.log(sum);

import { useState } from "react"

    
// };

export const CalcSum = () => {
    
    const [hidden, setHidden] = useState(true);
    const [colored, setColored] = useState(false)

    let style
     
    colored ? style = {
        color: 'red',
        backgroundColor: 'green'
    }:
    style = {}
    
    return(
        <>  
            {hidden && <h2>IM Hidden</h2>}  
            <h1>COUNT {hidden}</h1>
            <button  style={style} onClick={()=>setHidden(true)}>добавить</button>
            <button style={style}  onClick={()=>setHidden(false)}>убрать</button>
            <button onClick={()=>setColored(!colored)}>окрасить</button>

        </>
    )
}


