import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getSlider2 = createAsyncThunk(
    'getSlider1',
    async function( info, {dispatch}){
        const response = await fetch('https://dog.ceo/api/breed/hound/images')
        const dogs =  await response.json()
        
        dispatch(slidersInfo(dogs.message))
    }
)

const slider2Slice = createSlice({
    name: 'slidersSlice',
    initialState: {
        dogs: []
    },
    reducers: {
        slidersInfo: ( state, action ) =>{
            state.dogs = action.payload
        }
    }
})

export const { slidersInfo } = slider2Slice.actions
export default slider2Slice.reducer 