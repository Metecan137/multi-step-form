import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { FormValues } from "../../types";
import type { PayloadAction } from "@reduxjs/toolkit";

const multiformSlice = createSlice({
    name: "multiform",
    initialState:{
        buttonCount: 1,
        formValues:{} as FormValues
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
        addFormValues : (state, action: PayloadAction<FormValues>) => {
            state.formValues = action.payload
        }
    },
})


export const formInfo = (state: RootState) => state.multiform.formValues
export const {increaseButtonCount, decreaseButtonCount, addFormValues } = multiformSlice.actions
export const buttonCount = (state: RootState) => state.multiform.buttonCount
export default multiformSlice.reducer