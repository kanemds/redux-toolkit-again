import React from 'react'
import ReactionsButton from './ReactionsButton'
import TimeAgo from './TimeAgo'
import PostAuth from './PostAuth'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getSinglePostByPostId } from './postsSlice'


const PostsExcerpt = ({ postId }) => {

  const post = useSelector(state => getSinglePostByPostId(state, postId))
  console.log(post)

  return (
    <article>
      <h3>{post?.title}</h3>
      <p className='excerpt'>{post.body.substring(0, 75)}...</p>
      <p className='postCredit'>
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuth userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionsButton post={post} />
    </article>
  )
}

export default PostsExcerpt