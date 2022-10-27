import React from 'react'
import { useSelector } from 'react-redux'
import { getSinglePostByPostId } from './postsSlice'
import PostAuth from './PostAuth'
import TimeAgo from './TimeAgo'
import ReactionsButton from './ReactionsButton'
import { Link, useParams } from 'react-router-dom'

const SinglePost = () => {

  const { postId } = useParams()

  const post = useSelector(state => getSinglePostByPostId(state, Number(postId)))

  if (!post) {
    return (
      <section>
        <h2>Page Not Found</h2>
      </section>
    )
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <h2>{post.body}</h2>
      <p className='postCredit'>
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
        <PostAuth userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionsButton post={post} />
    </article>
  )
}

export default SinglePost