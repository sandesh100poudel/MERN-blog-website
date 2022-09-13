import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className='sidebarTitle'>About me</span>
            <img
            className="picture"
          src="https://stat2.bollywoodhungama.in/wp-content/uploads/2022/06/Rs.-500-crores-riding-on-Shah-Rukh-Khan-as-he-returns-with-three-films-in-2023-after-a-four-year-hiatus.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
            
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle"> CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Styles</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>

          </ul>
        </div>

        <div className="sidebarItem">
        <span className="sidebarTitle"> FOLLOW us</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className ="sidebarIcon fa-brands fa-tiktok"></i>
        </div>
        </div>
    </div>
  )
}
