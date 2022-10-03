import React, { Component } from "react";

import MainHeader from "./mainHeader";
import MainNav from "./mainNav";


export default class MainMenu extends Component{

    state = {
        menuWide: false
      }
    
      onMenuChange = () => {
        const {menuWide} = this.state  
        this.setState({
            menuWide : !menuWide
          })
      }
      

    render = () => {
        return(
            <>
                <MainHeader onMenuChange = {this.onMenuChange}/>
                <MainNav wide = {this.state.menuWide} />
            </>
        )
    }

}