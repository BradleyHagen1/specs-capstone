import {useEffect, useState, useContext} from "react";
import axios from 'axios';
import AuthContext from '../store/authContext'
import Posts from './Posts'



const Home = () => {
  const {userId, token} = useContext(AuthContext)
  const [posts, setPosts] = useState([])
  


  const getPosts = () => {
    axios.get(`/api/getPost/${userId}`, {
      headers: {
        authorization: token
      }
    })
    .then(res => {
      console.log(res.data)
      setPosts(res.data.post)
    })
  }

  const deletePost = id => {
    axios.delete(`/api/post/${id}`, {
      headers: {
        authorization: token
      }
    })
      .then(res => {
        getPosts()
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(getPosts, [])
  return (
  <div id="posts">
    <Posts posts={posts} deletePost={deletePost}/>
  </div>
  )
};

export default Home;
