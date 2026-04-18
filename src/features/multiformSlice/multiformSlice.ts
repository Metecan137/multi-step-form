import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { FormValues } from "../../types";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { SelectPlan } from "../../types";
import type { Ons } from "../../types";

const multiformSlice = createSlice({
    name: "multiform",
    initialState:{
        buttonCount: 1,
        formValues:{} as FormValues,
        selectPlan:{} as SelectPlan,
        toggle: false,
        ons: [] as Ons[],
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
        },
        setSelectPlan : (state, action: PayloadAction<SelectPlan>) => {
            state.selectPlan = action.payload
        },
        toggleTime : (state, action: PayloadAction<boolean>) => {
            state.toggle = action.payload
            if(state.toggle) {
                state.selectPlan.price = Number(state.selectPlan.price)*10
            }else {
                state.selectPlan.price = Number(state.selectPlan.price) / 10
            }
        },
        addOnsToList : (state, action: PayloadAction<Ons>) => {
            const exists = state.ons.find(item => item.name === action.payload.name)
            if(exists) {
                state.ons = state.ons.filter(item => item.name !== exists.name)
            }else {
                state.ons.push(action.payload)
            }
        }

    },
})


export const ons = (state: RootState) => state.multiform.ons
export const timeToggle = (state: RootState) => state.multiform.toggle
export const selectPlan = (state: RootState) => state.multiform.selectPlan
export const formInfo = (state: RootState) => state.multiform.formValues
export const {increaseButtonCount, decreaseButtonCount, addFormValues, setSelectPlan, toggleTime, addOnsToList } = multiformSlice.actions
export const buttonCount = (state: RootState) => state.multiform.buttonCount
export default multiformSlice.reducer