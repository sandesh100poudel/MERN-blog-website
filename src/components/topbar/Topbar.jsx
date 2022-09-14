import React from "react";
import "./topbar.css";

export default function Topbar(){
    return(
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className ="topIcon fa-brands fa-tiktok"></i>
                </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">lOGOUT</li>

                    

                    

                </ul>
            </div>
            <div className="topRight">
                <img
                className="topImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/220px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg" alt="srk" />
                <i className="topSearchIcon fa-brands fa-searchengin"></i>
            </div>
        </div>
    )
}

