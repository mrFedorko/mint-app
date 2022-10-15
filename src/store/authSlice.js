import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        name: '',
        email: '',
        password: '',
        isRegister: true,

        isAuth: true,
        token: null,
        userId: null,
        loading: false,
        errors: [],

        

    },
    reducers: {
        nameCh : (state, action) => {state.name = action.payload},
        emailCh : (state, action) => {state.email = action.payload},
        passwordCh : (state, action) => {state.password = action.payload},
        authCh: (state, action) => {state.isAuth = action.payload},
        registerCh: (state) => {state.isRegister = !state.isRegister},
        tokenCh: (state, action) => {state.token = action.payload},
        userIdCh: (state, action) => {state.userId = action.payload},
        loadingCh: (state, action) => {state.loading = action.payload},
        errorsPush: (state, action) => {state.errors = state.errors.push(action.payload)},
        errorsReset: (state) => {state.errors = []},
        reset: (state) => {
            state.name= '';
            state.email= '';
            state.password= '';
            state.isRegister= true;
            state.isAuth= false;
            state.token= null;
            state.userId= null;
            state.loading= false;
            state.errors= [];
    
        }


         

    }

})

export const {nameCh, emailCh, passwordCh, authCh, registerCh, tokenCh, userIdCh, loadingCh, errorsPush, errorsReset, reset} = authSlice.actions;
export default authSlice.reducer;