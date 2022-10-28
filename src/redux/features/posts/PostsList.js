import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PostsExcerpt from './PostsExcerpt'

// case One
import { selectPostIds, getPostsError, getPostsStatus } from './postsSlice'

// import { selectPostIds, getPostsError, getPostsStatus } from './postsSlice'


const PostsList = () => {

  // by exporting selectAllPosts, prevent future changes on the slice
  // case One
  const posts = useSelector(selectPostIds)
  // const posts = useSelector(selectPostIds)
  const postStatus = useSelector(getPostsStatus)
  const postError = useSelector(getPostsError)

  console.log(posts)

  let content

  if (postStatus === 'loading') {
    content = <p>"Loading..."</p>
  } else if (postStatus === 'succeeded') {
    // case One
    // const newest = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    // content = newest.map(post => <PostsExcerpt key={post.id} post={post} />)
    content = posts.map(postId => <PostsExcerpt key={postId} postId={postId} />)
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