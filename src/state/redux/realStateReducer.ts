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
    },
    togglePublishRealState: (state, action) => {
      const id = action.payload
      const currentRealStateIndex = state.findIndex((realState) => realState.id === id)
      if (currentRealStateIndex === -1) return
      const currentIsPublish = state[currentRealStateIndex].isPublished
      state[currentRealStateIndex].isPublished = !currentIsPublish

      if (currentIsPublish) toast.success('Unpublished successfully')
      if (!currentIsPublish) toast.success('Published successfully')
    }
  }
})

export const { createRealState, togglePublishRealState } = realStateSlice.actions
export default realStateSlice.reducer