import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers } from '../users/userSlice'
import { addedNewPost } from './postsSlice'


const NewPostForm = () => {

  const dispatch = useDispatch()
  const users = useSelector(allUsers)

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    userId: ''
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    // case 1
    // dispatch(addedNewPost({ ...newPost, id: nanoid() }))
    dispatch(addedNewPost(newPost))

    setNewPost({
      title: '',
      content: '',
      userId: ''
    })
  }


  const isValidate = Boolean(newPost.title) && Boolean(newPost.content) && Boolean(newPost.userId)


  const selectedUser = users.map(user =>
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  )


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
        <label htmlFor='author'>Author:</label>
        <select id='author' value={newPost.userId} onChange={e => setNewPost({ ...newPost, userId: e.target.value })}>
          <option value=''></option>
          {selectedUser}
        </select>
        <label htmlFor='postContent'>Content:</label>
        <textarea
          placeholder='What would you like to share today?'
          type='text'
          id="postContent"
          name='postContent'
          value={newPost.content}
          onChange={e => setNewPost({ ...newPost, content: e.target.value })}
        />
        <button
          type='button'
          onClick={handleSubmit}
          disabled={!isValidate}
        > Submit</button>
      </form>

    </section >
  )
}

export default NewPostForm


