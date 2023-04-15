import React from 'react'
import { useParams } from 'react-router-dom';
import './QuesDetails.css'
import Comment from './Comment';

export default function QuesDetails({ questions }) {
  const { id } = useParams();
  const question = questions.find((q) => q.id === Number(id));

  if (!question) {
    return <div>Question not found</div>;
  }

  const comments = [
    {
      user: "User",
      comment: "Hello I am here"
    },
    {
      user: "User",
      comment: "Hello I am here"
    },
    {
      user: "User",
      comment: "Hello I am here"
    },
    {
      user: "User",
      comment: "Hello I am here"
    }
  ]

  return (
    <div className='details'>
      <h2>{question.title}</h2>
      <p className='detail_desc'>{question.desc}</p>
      <div className='detail_other'>
      <p>Upvotes: {question.upvotes}</p>
      <p>User: {question.user}</p>
      <p>Comment count: {question.comment_count}</p>
      </div>
      <div className='comments'>
        Comments:<br/><br/>
        {comments.map(comment => (
            <Comment comment = {comment} />
        )
        )
}
      </div>
    </div>
  );
}
