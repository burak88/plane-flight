import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  InitialStateProps } from "./airportTypes";
import { getAirports } from "@/service";
import { AirportData } from "@/baselib";

const initialState: InitialStateProps={
    allAirports: []
}

const airportSlice = createSlice({
    name:"airportSlice",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getAirports.fulfilled,(state,action:PayloadAction<AirportData>)=>{
            state.allAirports = action.payload.rows
        })
    }
})

export const {} = airportSlice.actions
export default airportSlice.reducer