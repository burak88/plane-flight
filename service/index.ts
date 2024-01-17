import { createAsyncThunk } from "@reduxjs/toolkit";
import { AirportData } from "../baselib/index";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RAPID_API_BASE_URL,
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
});
export const getAirports = createAsyncThunk<AirportData>("getAirports", async () => {
  try {
    const response =  instance.get("/airports/list").then(res => res.data);
    return response;
  } catch (error) {
    throw error;
  }
});
