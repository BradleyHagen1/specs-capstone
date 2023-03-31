import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'
import { useNavigate } from 'react-router-dom'

function PostForm() {
  // const [ post, setPost] = useState('')
  const [ recipeName, setRecipeName] = useState('')
  const [ notes, setNotes] = useState('')
  const [ imageUrl, setImageUrl] = useState('')
  const {userId, token} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      recipeName,
      notes,
      imageUrl,
      userId
    }
    axios.post('/api/post', body, {
      headers: {
        Authorization: token
      }
    })
    .then(res => { navigate('/home')})
    .catch(err => console.log(err))
  }

  return (
    
    <form onSubmit={e => handleSubmit(e)}>
    <input placeholder='Enter recipe name' value={recipeName} onChange={e => setRecipeName(e.target.value)} />
    <input placeholder='Enter notes here' value={notes} onChange={e => setNotes(e.target.value)} />
    <input placeholder='Enter image Url here' value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
    {/* <input placeholder='Enter recipe name' value={recipeName} onChange={e => setRecipeName(e.target.value)} /> */}
    <button className='submit-button'>Submit</button>
    </form>
  )
}

export default PostForm