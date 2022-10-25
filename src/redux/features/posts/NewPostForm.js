import React from 'react'
import { useState } from 'react'

const NewPostForm = () => {

  const [newPost, setNewPost] = useState({
    title: "",
    content: ""
  })


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
          onChange={e => setNewPost({ ...newPost, title: e.target.title })}
        />
        <label htmlFor='postContent'>Content:</label>
        <textarea
          placeholder='What would you like to share today?'
          type='text'
          id="postContent"
          name='postContent'
          value={newPost.content}
          onChange={e => setNewPost({ ...newPost, title: e.target.content })}
        />
        <button type='button'>Submit</button>
      </form>
    </section>
  )
}

export default NewPostForm


