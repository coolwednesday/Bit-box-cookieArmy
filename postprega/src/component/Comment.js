import React from 'react'
import './Comment.css'

export default function Comment(props) {
    const {user, comment} = props.comment
  return (
    <div className='comment_tile'>
        <p className='user'>{user}</p>
        <p>{comment}</p>
    </div>
  )
}
