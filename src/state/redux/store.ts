import { configureStore } from "@reduxjs/toolkit"
import realStateReducer from "./realStateReducer"

export const store = configureStore({
  reducer: realStateReducer
})