import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
          <ul>
            <li><a href='/Forum' class='active'>Forum</a></li>
            <li><a href='/r/diet'>Diet Tracker</a></li>
            <li><a href='/r/quiz'>Quiz</a></li>
            <li><a href='/r/doctor'>Doctors</a></li>
          </ul>
        </div>
        <div className='header_right'>
          <img src=''/>
          <div className='header_user'>
            <span>Post.Prego</span>
          </div>
        </div>
    </div>
  )
}
