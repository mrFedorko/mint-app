import { createSlice } from "@reduxjs/toolkit";

const uvprintSlice = createSlice({
    name: 'uvprint',
    initialState: {
            signType: 'sign',
            width : '',
            height: '',
            signMaterial: '',
        
    },
    reducers: {
      signTypeCh : (state, action) => {state.signType = action.payload},
      widthCh: (state, action) =>{state.width = action.payload},
      heightCh: (state, action) =>{state.height = action.payload},
      signMaterialCh: (state, action) =>{state.signMaterial = action.payload},
      
    }
  })

  export const {signTypeCh, widthCh, heightCh, signMaterialCh} = uvprintSlice.actions;

  export default uvprintSlice.reducer;