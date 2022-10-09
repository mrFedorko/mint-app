import React, { useState } from "react";


import Header from "./header";
import { SideNavNarrow, SideNavWide } from "./sideNav";


const MainMenu  = () => {
      
    const [navWide, setNavWide] = useState(false)
    
        return(
            <>
                <Header onMenuChange = {() => 
                setNavWide(!navWide)}/>
                {navWide ? <SideNavWide/> : <SideNavNarrow/>}

            </>
        )
    
}

export default MainMenu