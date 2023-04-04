import React from 'react'
import PostCard from "./PostCard"

const Posts =({posts, deletePost}) => {


  return (
    <div>
    {posts.map(post => {
        return <PostCard post={post} deletePost={deletePost} key={post.id}/>
    })}
    </div>
  )
}

export default Posts