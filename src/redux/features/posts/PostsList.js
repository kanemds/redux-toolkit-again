import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'

const PostsList = () => {

  // by exporting selectAllPosts, prevent future changes on the slice
  const posts = useSelector(selectAllPosts)

  const renderPosts = posts.map(post =>
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
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