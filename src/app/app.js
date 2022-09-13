import React, { Component } from "react";

import MainScreen from "../mainScreen";
import MainMenu from "../mainMenu/mainMenu";




class App extends Component {
  
 
  
  render = () => {
    return(
      <>
        <MainMenu/>
        <MainScreen/>
        
      </>
    )
  }
}

export default App;
