import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from '@reduxjs/toolkit'
import { format } from 'timeago.js'

const initialState = [
  { id: '1', title: 'a', content: 'a' },
  { id: '2', title: 'b', content: 'b' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // case 1
    // addedNewPost: (state, action) => {
    //   state.push(action.payload)
    // }
    addedNewPost: {
      reducer(state, action) {
        state.push(action.payload)
      },
      // destructure from the object object form dispatch(action(value))
      prepare({ ...newPost }) {
        return {
          payload: {
            id: nanoid(),
            ...newPost,
            // in this case can change the data easliy, new added date
            date: format(new Date())
          }
        }
      }
    }
  }
})

export const selectAllPosts = (state) => state.posts

export const { addedNewPost } = postsSlice.actions
export default postsSlice.reducer