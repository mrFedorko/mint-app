import React  from "react";
import {Routes, Route} from "react-router-dom"
import { useSelector } from "react-redux";



import MainPage from "../screens/mainPage";
import Signs from "../screens/signs";
import Polygraphy from "../screens/polygraphy";
import UvPrint from "../screens/uvPrint";
import Design from "../screens/design";
import Footer from "../footer";
import Cabinet from "../screens/personalCab";
import AuthPage from "../authPage/authPage";





const MainScreen = () => {
   
        return (
            
                <>
                        <Routes>
                                
                                <Route index element = {<MainPage/>}/>
                                <Route path="/design" element = {<Design/>}/>
                                <Route path="/uvprint" element = {<UvPrint/>}/>
                                <Route path="/signs" element = {<Signs/>}/>
                                <Route path="/polygraphy" element = {<Polygraphy/>}/>
                                <Route path="/personal" element = {<Personal/>}/>

                        </Routes>
                        <Footer/>

        
                </>

        )
    
}

const Personal = () => {
        const {isAuth} = useSelector(state => state.auth)
        if (isAuth){
        return   <Cabinet/>
        }
        return <AuthPage/>
}


export default MainScreen;