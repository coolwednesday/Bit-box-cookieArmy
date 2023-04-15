import React from 'react'
import {Link} from 'react-router-dom'
import './PostItem2.css'
import { useState } from 'react';
import QuesDetails from './QuesDetails'
export default function PostItem2(props) {
  const {id, title, upvotes, image, user, desc, publishedAt, url} = props.post
    const [showContent, setShowContent] = useState(false);
    function toggleContent() {
        setShowContent(!showContent);
      }
  return (
    <>
    <div className='post'>
        <div className='post_left'>
            <span>{upvotes}</span>
        </div>
        <div className='post_center'>
            <img src={!image?'./logo.png':image}/>
        </div>
        <div className='post_right'>
            <h3><Link to={`/Details/${id}`}>{title}</Link></h3>
            <span className='post_info'>
                Submitted By {" "}
                <a href={'/u/${user}'}>{user}</a>
            </span>
            <div><button className='read_more text-dark' onClick={toggleContent}>Read more</button></div>
        </div>
    </div>
    {showContent && (<div className='more_details'>
            <div className='detail_desc2'><h4>{desc}</h4></div>
            <div className='detail_date'><h6>Published On: {publishedAt}</h6></div>
            <button><a href={url}>See Full News</a></button>
        </div>)}
    </>
  )
}
