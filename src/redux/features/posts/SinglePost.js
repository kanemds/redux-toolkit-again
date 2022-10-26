import React from 'react'
import { useSelector } from 'react-redux'
import { getSinglePost } from './postsSlice'
import PostAuth from './PostAuth'
import TimeAgo from './TimeAgo'
import ReactionsButton from './ReactionsButton'

const SinglePost = () => {

  const post = useSelector(state => getSinglePost(state, postId))

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
        <PostAuth userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionsButton post={post} />
    </article>
  )
}

export default SinglePost