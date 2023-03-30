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

  useEffect(getPosts, [])
  return (
  <div>
    <Posts posts={posts}/>
  </div>
  )
};

export default Home;
