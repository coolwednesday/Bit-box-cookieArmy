import React from 'react'
import './Sidebar.css'


export default function Sidebar() {
  const menus = [
    {to: '/r/Home', text: "Home"},
    {to: '/r/Diet', text: "Diet Tracker"},
    {to: '/r/Quiz', text: "Quiz"}
  ]
    return (
        <div className='sidebar'>
          <div className='sidebar_logo'>
            <img src="./logo.png" className='side_img'/>
          </div>
          <div className='sidebar_search'>
            <input type='text' name='search' placeholder='search'/>
          </div>
          <div className='sidebar_items'>
            <ul className='sidebar_menu'>
              {menus.map(menus => (
                <li><a href={menus.to}>{menus.text}</a></li>
              ))}
            </ul>
            <hr/>
          </div>
        </div>
    )
  }
 