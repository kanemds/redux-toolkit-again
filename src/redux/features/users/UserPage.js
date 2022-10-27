import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getSinglePostByUserId, selectAllPosts } from '../posts/postsSlice'
import { singleUser } from './userSlice'

const UserPage = () => {

  const { userId } = useParams()

  const user = useSelector(state => singleUser(state, Number(userId)))


  // case one
  // const allPosts = useSelector(selectAllPosts)
  // const userPosts = allPosts.filter(post => post.userId === Number(userId))

  // case two
  const userPosts = useSelector(state => getSinglePostByUserId(state, Number(userId)))
  console.log(userPosts)


  const postTitles = userPosts.map(post =>
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title} </Link>
    </li>
  )

  return (
    <section>
      <h2>{user?.name}</h2>
      <ol>
        {postTitles}
      </ol>
    </section>
  )


}

export default UserPage


