import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getSlider4 = createAsyncThunk(
    'getSlider1',
    async function( info, {dispatch}){
        const response = await fetch('https://dummyjson.com/products?limit=10&')
        const data =  await response.json()
        
        dispatch(slidersInfo(data.products))
    }
)

const slider4Slice = createSlice({
    name: 'slidersSlice',
    initialState: {
        data: []
    },
    reducers: {
        slidersInfo: ( state, action ) =>{
            state.data = action.payload
        }
    }
})

export const { slidersInfo } = slider4Slice.actions
export default slider4Slice.reducer 