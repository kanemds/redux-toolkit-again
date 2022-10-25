import React from 'react'
import { useDispatch } from 'react-redux'
import { addedReaction } from './postsSlice'

const ReactionsButton = ({ post }) => {

  const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
  }

  const dispatch = useDispatch()

  const reactionButton = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(addedReaction({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  })


  return (
    <div>{reactionButton}</div>
  )
}

export default ReactionsButton