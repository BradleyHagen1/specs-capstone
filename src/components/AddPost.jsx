import {useState} from "react";
import PostForm from "./PostForm"

const AddPost = () => {
  const [post, setPost] = useState(true)


  return (
    <div>
     <PostForm/>   
    </div>
  )
};

export default AddPost;
