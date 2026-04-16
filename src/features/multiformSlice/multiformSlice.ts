import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const multiformSlice = createSlice({
    name: "multiform",
    initialState:{
        buttonCount: 1,
    },
    reducers:{
        increaseButtonCount : (state) => {
            if(state.buttonCount < 4) {
                state.buttonCount++
            }
        },
        decreaseButtonCount : (state) => {
            if(state.buttonCount > 1) {
                state.buttonCount--
            }
        },
    },
})


export const {increaseButtonCount, decreaseButtonCount } = multiformSlice.actions
export const buttonCount = (state: RootState) => state.multiform.buttonCount
export default multiformSlice.reducer