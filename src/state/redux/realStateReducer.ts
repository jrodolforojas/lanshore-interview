import { createSlice } from "@reduxjs/toolkit";
import { realStates } from "../../utils/mocks/real-states";
import { RealState } from "../../types/real-state";

const initialState = realStates

export const realStateSlice = createSlice({
  name: 'realState',
  initialState,
  reducers: {
    createRealState: (state, action) => {
      const newRealState = action.payload as RealState
      state.push(newRealState)
    }
  }
})

export const { createRealState } = realStateSlice.actions
export default realStateSlice.reducer