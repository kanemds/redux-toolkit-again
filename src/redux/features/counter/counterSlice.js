import { createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"

const initialState = {
  count: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      return initialState
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    }
  }
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer