

import React from 'react'
import { useSelector } from 'react-redux'
import { allUsers } from '../users/userSlice'

const PostAuth = ({ userId }) => {

  const users = useSelector(allUsers)

  const author = users.find(user => user.id === userId)

  return <span>by {author ? author.name : 'Error'}</span>

}

export default PostAuth