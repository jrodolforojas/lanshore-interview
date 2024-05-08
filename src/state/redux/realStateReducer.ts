import { createSlice } from "@reduxjs/toolkit";
import { realStates } from "../../utils/mocks/real-states";
import { RealState } from "../../types/real-state";
import { toast } from "sonner";

const initialState = realStates

export const realStateSlice = createSlice({
  name: 'realState',
  initialState,
  reducers: {
    createRealState: (state, action) => {
      const newRealState = action.payload as RealState
      state.push(newRealState)
      toast.success('New Real State created')
    }
  }
})

export const { createRealState } = realStateSlice.actions
export default realStateSlice.reducer