import React, { Component } from "react";
import {Routes, Route} from "react-router-dom"


import MainPage from "../screens/mainPage";
import Signs from "../screens/signs";
import Polygraphy from "../screens/polygraphy";
import UvPrint from "../screens/uvPrint";
import Design from "../screens/design"


export default class MainScreen extends Component{
   
   
    render = () => {
        return (
            
                <Routes>
            
                    <Route index element = {<MainPage/>}/>
                    <Route path="/design" element = {<Design/>}/>
                    <Route path="/uvprint" element = {<UvPrint/>}/>
                    <Route path="/signs" element = {<Signs/>}/>
                    <Route path="/polygraphy" element = {<Polygraphy/>}/>
      
                </Routes>

        )
    }
}