import React from 'react'
import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img src="https://images.news18.com/ibnlive/uploads/2022/09/bollywood-films-with-100cr-opening-2.jpg?impolicy=website&width=0&height=0"
         alt="" className="writeImg" />
        <form action="/" className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i class="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />


            </div>
            <div className="writeFormGroup">
                <textarea  placeholder='tell your story...' type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>

  )
}
