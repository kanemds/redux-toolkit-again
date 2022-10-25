import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addedNewPost } from './postsSlice'


const NewPostForm = () => {

  const dispatch = useDispatch()

  const [newPost, setNewPost] = useState({
    title: "",
    content: ""
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    // case 1
    // dispatch(addedNewPost({ ...newPost, id: nanoid() }))
    dispatch(addedNewPost(newPost))

    setNewPost({
      title: "",
      content: ""
    })
  }



  return (
    <section>
      <h2>New Post</h2>
      <form>
        <label htmlFor='postTitle'>Title:</label>
        <input
          placeholder='Title'
          type='text'
          id="postTitle"
          name='postTitle'
          value={newPost.title}
          onChange={e => setNewPost({ ...newPost, title: e.target.value })}
        />
        <label htmlFor='postContent'>Content:</label>
        <textarea
          placeholder='What would you like to share today?'
          type='text'
          id="postContent"
          name='postContent'
          value={newPost.content}
          onChange={e => setNewPost({ ...newPost, content: e.target.value })}
        />
        <button type='button' onClick={handleSubmit}>Submit</button>
      </form>

    </section>
  )
}

export default NewPostForm


