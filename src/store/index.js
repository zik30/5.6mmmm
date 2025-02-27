import { configureStore } from "@reduxjs/toolkit";
import slidersReducer from './sliderSlice'
import slider2Reducer from './slider2Slice'
import slider3Reducer from './slider3Slice'
import slider4Reducer from './slider4Slice'
import memesReducer from './memesSlice'

export const store = configureStore({
    reducer: {
        slidersReducer,
        slider2Reducer,
        slider3Reducer,
        slider4Reducer,
        memesReducer
    }
})