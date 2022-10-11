import React, { useState } from "react";


import Header from "./header";
import { SideNavNarrow, SideNavWide } from "./sideNav";


const Menu  = () => {
    
    const [navWide, setNavWide] = useState(false)
    const hideWide = (target) => {
        if(target.className.indexOf('wide') === -1){
            setNavWide(false)
        }
       
    }

        return(
            <>
                <Header onMenuChange = {() => setNavWide(!navWide)}/>
                {navWide ? <SideNavWide hideWide = {hideWide}/> : <SideNavNarrow/>}

            </>
        )
    
}

export default Menu