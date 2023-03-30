import React from 'react'
import PostCard from "./PostCard"

const Posts =({posts}) => {


  return (
    <div>
    {posts.map(post => {
        return <PostCard post={post} key={post.id}/>
    })}
    </div>
  )
}

export default Posts