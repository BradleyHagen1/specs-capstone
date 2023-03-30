import React from "react";
import { useState } from "react";

const PostCard = ({post}) => {

  // const [editting, setEditting] = useState(false)

  return (
  <div>
    <h1>{post.recipeName}</h1>
    <img src={post.imageUrl} alt="recipe img"/>
  </div>
  )
};

export default PostCard;
