import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id: '1', title: 'a', content: 'a' },
  { id: '2', title: 'b', content: 'b' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    newPost: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const selectAllPosts = (state) => state.posts

export const { newPost } = postsSlice.actions
export default postsSlice.reducer