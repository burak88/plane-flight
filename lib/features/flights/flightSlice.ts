import { createSlice } from "@reduxjs/toolkit";
import {  InitialStateProps } from "./flightTypes";

const initialState: InitialStateProps={}

const flightSlice = createSlice({
    name:"flightSlice",
    initialState,
    reducers:{},
})

export const {} = flightSlice.actions
export default flightSlice.reducer