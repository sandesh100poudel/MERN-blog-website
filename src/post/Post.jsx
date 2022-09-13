import React from 'react';
import "./post.css";

export default function Post() {
  return (
    <div className="post">
        <img 
        className="postImg" 
        src="https://filmfare.wwmindia.com/content/2021/aug/shahrukhkhan41630297507.jpg" 
        alt="" />
<div className="postInfo">
    <div className="postCats">
        <span className="postCat">Music</span>
        <span className="postCat">Life</span>
    </div>
    <span className="postTitle">
        Lorem  ipsum dolor sit amet
    </span>
    <hr />
    <span className="postDate">1 hour ago</span>
</div>
<p className='description'>Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolores esse assumenda incidunt doloremque, a in, earum architecto nam dolorum aut aspernatur sapiente libero ut id ratione, porro nostrum aliquid! adipisicing elit. Laudantium mollitia hic distinctio sed possimus perferendis iste quia repellendus ad non id cum libero tempore iusto placeat doloremque, dolor quam nemo?</p>

    </div>
  )
}
