import React from 'react';
import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar";


export default function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>

          
        </div>
        <form action="/" className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img src="https://images.news18.com/ibnlive/uploads/2022/09/bollywood-films-with-100cr-opening-3.jpg?impolicy=website&width=0&height=0"
             alt="" />
             <label htmlFor="fileInput">
             <i className="settingsPPIcon fa-regular fa-circle-user"></i>
             </label>
             <input type="file" id="fileInput"style={{display:"none"}} />
             
          </div>



          <label htmlFor="">Username</label>
          <input type="text" name="" id="" placeholder="Bishal" />
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" placeholder="Bishal100poudel@gmail.com" />
          <label htmlFor="">Password</label>
          <input type="password"  />
<button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />

    </div>
  )
}
