import { configureStore } from '@reduxjs/toolkit'
import airportSlice from './features/airports/airportSlice'
import flightSlice from './features/flights/flightSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        airportSlice : airportSlice,
        flightSlice : flightSlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']