import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id: '1', title: 'a', content: 'a' },
  { id: '2', title: 'b', content: 'b' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  }
})

export const selectAllPosts = (state) => state.posts

export default postsSlice.reducer