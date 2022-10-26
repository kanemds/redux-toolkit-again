import React from 'react'
import ReactionsButton from './ReactionsButton'
import TimeAgo from './TimeAgo'
import PostAuth from './PostAuth'

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className='postCredit'>
        <PostAuth userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionsButton post={post} />
    </article>
  )
}

export default PostsExcerpt