import React from "react";

import ContentRouter from "../bloc/contentRouter/contentRouter";
import Menu from "../bloc/menu/menu";
// import Loading from "../bloc/loading/loading";

import { AuthContext } from "../context/auth.context";
import { useAuth } from "../hooks/auth.hook";
import { useSettings } from "../hooks/settings.hook";





const App  =  () =>  {
  const {token, login, logout, id} = useAuth();
  const isAuth = !!token;
  const {getRequest} = useSettings()
  
  
  if (isAuth && id) {
    getRequest(`http://localhost:8000/api/user/${id}`)
  }

  return(
      <>
        <AuthContext.Provider value={{token, login, logout, id, isAuth}} >
          <Menu/>
          <ContentRouter/>
        </AuthContext.Provider>
      </>
    )
}

export default App;
