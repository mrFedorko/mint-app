import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
       
        email: '',
        password: '',
        isRegister: false,

    },
    reducers: {
       
        emailCh : (state, action) => {state.email = action.payload},
        passwordCh : (state, action) => {state.password = action.payload},
        registerCh: (state, action) => {state.isRegister = action.payload},
       
        reset: (state) => {
        
            state.email= '';
            state.password= '';
            state.isRegister= true;
           
    
        }


         

    }

})

export const {emailCh, passwordCh, registerCh,  reset} = authSlice.actions;
export default authSlice.reducer;