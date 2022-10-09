import React  from "react";
import {Routes, Route} from "react-router-dom"
import { useSelector } from "react-redux";



import MainPage from "../screens/mainPage/mainPage";
import Signs from "../screens/signs/signs";
import Polygraphy from "../screens/polygraphy/polygraphy";
import UvPrint from "../screens/uvPrint/uvPrint";
import Design from "../screens/design/design";
import Footer from "../footer/footer";
import Cabinet from "../screens/personalCab/personal";
import AuthPage from "../authPage/authPage";

import SignsOrder from "../screens/signs/signsOrder";
import SignsUseful from '../screens/signs/signsUseful';
import SignsCalculator from '../screens/signs/signsCalculator'




const ContentRouter = () => {
   
        return (
            
                <>
                        <Routes>
                                
                                <Route index element = {<MainPage/>}/>
                                <Route path="/design" element = {<Design/>}/>
                                <Route path="/uvprint" element = {<UvPrint/>}/>
                                <Route path="/signs" element = {<Signs/>}>
                                        <Route path="/signs/calculator" element = {<SignsCalculator/>}/>
                                        <Route path="/signs" element = {<SignsUseful/>}/>
                                        <Route path="/signs/order" element = {<SignsOrder/>}/>
                                </Route>
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


export default ContentRouter;