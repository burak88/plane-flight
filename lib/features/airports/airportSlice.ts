import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  InitialStateProps } from "./airportTypes";
import { getAirportRes } from "@/service";

const initialState: InitialStateProps={
    allAirports: []
}

const airportSlice = createSlice({
    name:"airportSlice",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
       builder.addCase(getAirportRes.fulfilled,(state,action:PayloadAction<InitialStateProps['allAirports']>)=>{
        state.allAirports = action.payload
       })
    }
})

export const {} = airportSlice.actions
export default airportSlice.reducer