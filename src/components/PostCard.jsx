import React from "react";
import { useState } from "react";


const PostCard = ({post, deletePost}) => {
  // const deletePost 

  // const [editting, setEditting] = useState(false)

  return (
  <div className="single-post">
    <img src={post.imageUrl} className="img-container" alt="recipe img"/>
    <h1>{post.recipeName}</h1>
    <h2>{post.notes}</h2>
    <button className="deleteBtn" onClick={() => deletePost(post.id)}>
      Delete
    </button>
  </div>
  )
};

export default PostCard;
