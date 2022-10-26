import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const res = await axios.get(USERS_URL)
    return res.data
  } catch (error) {
    return error.message
  }
})


const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},

  // note the postsList need to define pending and rejected for if statement validation
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const allUsers = state => state.users


export default userSlice.reducer