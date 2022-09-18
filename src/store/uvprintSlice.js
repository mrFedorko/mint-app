import { createSlice } from "@reduxjs/toolkit";

const uvprintSlice = createSlice({
    name: 'uvprint',
    initialState: {
            signType: '',
            width : '',
            height: '',
            signMaterial: '',
        
    },
    reducers: {
      signTypeCh : (state, action) => {state.calculator.signType = action.payload},
      widthCh: (state, action) =>{state.calculator.width = action.payload},
      heightCh: (state, action) =>{state.calculator.height = action.payload},
      signMaterialCh: (state, action) =>{state.calculator.signMaterial = action.payload},
      
    }
  })

  export const {signTypeCh, widthCh, heightCh, signMaterialCh} = uvprintSlice.actions;

  export default uvprintSlice.reducer