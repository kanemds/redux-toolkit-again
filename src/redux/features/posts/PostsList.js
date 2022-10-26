import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PostsExcerpt from './PostsExcerpt'

import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts } from './postsSlice'


const PostsList = () => {

  const dispatch = useDispatch()

  // by exporting selectAllPosts, prevent future changes on the slice
  const posts = useSelector(selectAllPosts)
  const postStatus = useSelector(getPostsStatus)
  const postError = useSelector(getPostsError)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])


  let content

  if (postStatus === 'loading') {
    content = <p>"Loading..."</p>
  } else if (postStatus === 'succeeded') {
    const newest = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = newest.map(post => <PostsExcerpt key={post.id} post={post} />)
  } else if (postStatus === 'failed') {
    content = <p>{postError}</p>
  }


  return (
    <div>
      {content}
    </div>
  )
}

export default PostsList