import { configureStore } from "@reduxjs/toolkit";
import multiformReducer from "./multiformSlice/multiformSlice"

export const store = configureStore({
    reducer: {
        multiform: multiformReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch