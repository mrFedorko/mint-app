import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orLayoutCh } from '../../../../store/orderSlice';

export const UploadFile = () => {
    
    const [upload, setUpload] = useState('null')
    const dispatch = useDispatch();
    const {orLayout} = useSelector(state => state.order)

    const handleChange = async (e) => {
        dispatch(orLayoutCh(e.target.files)) ;  
        console.log(e.target.files) 
    }

    console.log(orLayout)
    
    return(
    
        <input type="file"      
        onChange={ handleChange }
        />

    )
}