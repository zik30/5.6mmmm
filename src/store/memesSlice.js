import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getMemes = createAsyncThunk(
    'getSlider1',
    async function( info, {dispatch}){
        const response = await fetch('https://api.imgflip.com/get_memes')
        const memes =  await response.json()
        
        dispatch(memesInfo(memes.data.memes))
    }
)

const memesSlice = createSlice({
    name: 'slidersSlice',
    initialState: {
        memes: []
    },
    reducers: {
        memesInfo: ( state, action ) =>{
            state.memes = action.payload
        }
    }
})

export const { memesInfo } = memesSlice.actions
export default memesSlice.reducer 