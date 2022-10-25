import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id: '1', name: 'John' },
  { id: '2', name: 'Jan' },
  { id: '3', name: 'Feb' },
]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  }
})

export const allUsers = state => state.users


export default userSlice.reducer