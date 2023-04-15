import React from 'react'
import PostItem2 from './PostItem2'
import QuesDetails from './QuesDetails'
import './Question.css'

export default function Question(props) {
    const questions = props.questions
  return (
    
    <div className='questions'>
        {questions.map(post => (
            <PostItem2 post = {post} />
        )
        )
}
    </div>
  )
}
