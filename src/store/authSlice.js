import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: '',
        password: '',
        isRegister: 'true',
        isAuth: false,
        token: ''
    },
    reducers: {
        emailCh : (state, action) => {state.email = action.payload},
        passwordCh : (state, action) => {state.email = action.payload},
        authCh: (state) => {state.auth = !state.auth},
        registerCh: (state) => {state.isRegister = !state.isRegister}
         

    }

})

export const {emailCh, passwordCh, authCh,registerCh} = authSlice.actions;
export default authSlice.reducer;