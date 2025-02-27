import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getSlider = createAsyncThunk(
    'getSlider1',
    async function( info, {dispatch}){
        const response = await fetch('https://official-joke-api.appspot.com/jokes/ten')
        const jokes =  await response.json()
        
        dispatch(slidersInfo(jokes))
    }
)

const slidersSlice = createSlice({
    name: 'slidersSlice',
    initialState: {
        jokes: []
    },
    reducers: {
        slidersInfo: ( state, action ) =>{
            state.jokes = action.payload
        }
    }
})

export const { slidersInfo } = slidersSlice.actions
export default slidersSlice.reducer 