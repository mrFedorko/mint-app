import React  from "react";
import {Routes, Route} from "react-router-dom"


import MainPage from "../screens/mainPage";
import Signs from "../screens/signs";
import Polygraphy from "../screens/polygraphy";
import UvPrint from "../screens/uvPrint";
import Design from "../screens/design";

import "./_footer.scss"


const MainScreen = () => {
   
        return (
            
                <>
        <Routes>
            
            <Route index element = {<MainPage/>}/>
            <Route path="/design" element = {<Design/>}/>
            <Route path="/uvprint" element = {<UvPrint/>}/>
            <Route path="/signs" element = {<Signs/>}/>
            <Route path="/polygraphy" element = {<Polygraphy/>}/>

        </Routes>

        <section class="footer">
                <div class="footer__info">
                        <adress class="footer__addr">Белгород</adress>
                        <a href="tel:89524346863" class="footer__phone">+7 952 4346863 </a>
                        <div class="footer__social">
                                <a href="/" class="footer__social-item"><img src="icons/vk.png" alt="vk"/></a>
                                <a href=  "/" class="footer__social-item"><img src="icons/telegram.png" alt="telegram"/></a>
                                <a href="/" class="footer__social-item"><img src="icons/viber.png" alt="viber"/></a>   
                                <a href="/" class="footer__social-item"><img src="icons/whatsapp.png" alt="whatsapp"/></a>     
                        </div>
                </div>
        </section>
                </>

        )
    
}

export default MainScreen;