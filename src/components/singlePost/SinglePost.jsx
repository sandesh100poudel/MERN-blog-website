import React from 'react';
import "./singlePost.css";

export default function singlePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.news18.com/ibnlive/uploads/2022/03/shah-rukh-khan-10-16469802193x2.jpg?impolicy=website&width=510&height=356"
             alt="" className="singlePostImg" />
             <h1 className="singlePostTitle">Lorem ipsum demand is the riaise of the democracy .
             <div className="singlePostEdit">
             <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
             <i className="singlePostIcon fa-solid fa-trash-can"></i>

             </div>
             </h1>
             <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>safak</b></span>
                <span className="singlePostDate">1 hour ago</span>
             
             </div>
             <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaque repudiandae id, doloribus molestias officia, quidem provident culpa commodi laborum quasi atque obcaecati nam quod maiores sed nisi laboriosam at?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nisi accusamus ea, repellat exercitationem corporis repellendus quidem facere perspiciatis adipisci animi voluptates. Quia commodi odio cupiditate deserunt, modi voluptas molestiae!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores maiores ad facilis cum et? Laudantium ad eligendi cum ipsam ex atque hic modi voluptas, amet vel, id voluptatem, quibusdam neque?

             </p>

        </div>
    </div>
  )
}
