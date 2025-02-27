import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getSlider3 = createAsyncThunk(
    'getSlider1',
    async function( info, {dispatch}){
        const response = await fetch('https://dummyjson.com/posts')
        const data =  await response.json()
        
        dispatch(slidersInfo(data.posts))
    }
)

const slider3Slice = createSlice({
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

export const { slidersInfo } = slider3Slice.actions
export default slider3Slice.reducer 