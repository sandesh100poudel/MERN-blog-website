import React from "react";
import "./topbar.css";
import {Link} from "react-router-dom";

export default function Topbar(){
    const user =false;
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
                <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                        </li>

                    <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
                    <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
                    
                    <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
                    
                    
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>

                    

                    

                </ul>
            </div>
            <div className="topRight">
                {
                    user ?(
<img
                className="topImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/220px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg" alt="srk" />
                
                    ): (
                        <ul className="topList">
                            <li className="topListItem">
                            <Link className="link" to="/login" >LOGIN</Link>
                            </li>
                      
                            <li className="topListItem">
                        <Link className="link" to="/register">REGIESTER</Link>
                        </li>
                        </ul>

                          
                          
                    )
                }
                <i className="topSearchIcon fa-brands fa-searchengin"></i>
            </div>
        </div>
    )
}

