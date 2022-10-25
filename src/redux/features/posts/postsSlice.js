import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from '@reduxjs/toolkit'
import { sub } from "date-fns"


const initialState = [
  { id: '1', userId: '1', title: 'a', content: 'a', date: sub(new Date(), { minutes: 10 }).toISOString() },
  { id: '2', userId: '3', title: 'b', content: 'b', date: sub(new Date(), { minutes: 40 }).toISOString() },
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
            date: new Date().toISOString()
          }
        }
      }
    }
  }
})

export const selectAllPosts = (state) => state.posts

export const { addedNewPost } = postsSlice.actions
export default postsSlice.reducer