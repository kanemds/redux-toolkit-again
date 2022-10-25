import React from 'react'
import { useSelector } from 'react-redux'
import PostAuth from './PostAuth'
import { selectAllPosts } from './postsSlice'
import TimeAgo from './TimeAgo'

const PostsList = () => {

  // by exporting selectAllPosts, prevent future changes on the slice
  const posts = useSelector(selectAllPosts)

  const newest = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderPosts = newest.map(post =>
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className='postCredit'>
        <PostAuth userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
    </article>
  )

  return (
    <div>
      <h2>Posts</h2>
      {renderPosts}
    </div>
  )
}

export default PostsList