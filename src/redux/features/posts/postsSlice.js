import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { nanoid } from '@reduxjs/toolkit'
import { sub } from "date-fns"
import axios from "axios"
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'


const initialState = {
  posts: [],
  status: 'idle', // idel | loading | succeeded | failed
  error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const res = await axios.get(POSTS_URL)
    return [...res.data]
  } catch (error) {
    return error.message
  }
})

export const addPost = createAsyncThunk('posts/addPost', async (initialPost) => {
  try {
    const res = await axios.post(POSTS_URL, initialPost)
    return res.data
  } catch (error) {
    return error.message
  }
})


const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // case 1
    // addedNewPost: (state, action) => {
    //   state.posts.push(action.payload)
    // }
    addedNewPost: {
      reducer(state, action) {
        state.posts.push(action.payload)
      },
      // destructure from the object object form dispatch(action(value))
      prepare({ ...newPost }) {
        return {
          payload: {
            id: nanoid(),
            ...newPost,
            // in this case can change the data easliy, new added date
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          }
        }
      }
    },
    addedReaction(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.posts.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    }
  },
  // typeScript recommand builder syntax
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        let min = 1
        const loadedPosts = action.payload.map(post => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString()
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
          }
          return post
        })
        state.posts = state.posts.concat(loadedPosts)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addPost.fulfilled, (state, action) => {
        action.payload.userId = Number(action.payload.userId)
        action.payload.date = new Date().toISOString()
        action.payload.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0
        }
        console.log(action.payload)
        state.posts.push(action.payload)
      })
  }
})

export const selectAllPosts = (state) => state.posts.posts
export const getPostsStatus = (state) => state.posts.status
export const getPostsError = (state) => state.posts.error

export const { addedNewPost, addedReaction } = postsSlice.actions
export default postsSlice.reducer