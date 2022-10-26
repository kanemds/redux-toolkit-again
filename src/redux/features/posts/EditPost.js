import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { allUsers } from '../users/userSlice'
import { getSinglePost, updatePost } from './postsSlice'

const EditPost = () => {

  const { postId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const post = useSelector(state => getSinglePost(state, Number(postId)))
  const users = useSelector(allUsers)

  const [edit, setEdit] = useState({
    title: post.title,
    content: post.body,
    userId: post.userId
  })

  const [requestStatus, setRequestStatus] = useState('idle')

  if (!post) {
    return (
      <section>
        <h2>Post Not Found</h2>
      </section>
    )
  }

  const isValidate = [edit.title, edit.content, edit.useId].every(Boolean) && requestStatus === 'idle'

  const hanldeSave = () => {
    if (isValidate) {
      try {
        setRequestStatus('pending')
        dispatch(updatePost({ ...edit, id: post.id, reactions: post.reactions })).unwrap()
        setEdit({
          title: '',
          content: '',
          userId: ''
        })
        navigate(`/post/${postId}`)

      } catch (error) {
        console.error('Failed to Save. Try again', error)
      }
      finally {
        setRequestStatus('idle')
      }
    }
  }

  const usersOptions = users.map(user =>
    <optioin
      key={user.id}
      value={user.id}
    >
      {user.name}
    </optioin>
  )

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor='postTitle'>Title:</label>
        <input
          placeholder='Title'
          type='text'
          id="postTitle"
          name='postTitle'
          value={edit.title}
          onChange={e => setEdit({ ...edit, title: e.target.value })}
        />
        <label htmlFor='author'>Author:</label>
        <select id='author' value={edit.userId} defaultValue={edit.userId} onChange={e => setEdit({ ...edit, userId: e.target.value })}>
          <option value=''></option>
          {usersOptions}
        </select>
        <label htmlFor='postContent'>Content:</label>
        <textarea
          placeholder='What would you like to share today?'
          type='text'
          id="postContent"
          name='postContent'
          value={edit.content}
          onChange={e => setEdit({ ...edit, content: e.target.value })}
        />
        <button
          type='button'
          onClick={hanldeSave}
          disabled={!isValidate}
        > Save</button>
      </form>

    </section >
  )
}

export default EditPost