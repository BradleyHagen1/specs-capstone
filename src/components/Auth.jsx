import {useState, useContext} from "react";
import axios from "axios";
import AuthContext from "../store/authContext"
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [register, setRegister] = useState(false)
  const {login} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
  e.preventDefault()
  console.log(username,password)

  axios.post(register ? '/api/register' : 'api/login' , {username, password}) 
    .then(res => {
      console.log(res.data)
      setPassword('')
      setUsername('')
      login(res.data.token, res.data.exp, res.data.userId)
      navigate('/home')

    })
    .catch(err => {
      console.log(err)
      alert(err.response.data)
    })
}

  return (
<div className="landing">
  <div className="auth-welcome">
    <h2>Please {register ? 'register.' : 'login.'}</h2>
    <form onSubmit={e => handleSubmit(e)}>
      <input placeholder="username" value={username} onChange={e => setUsername(e.target.value)} className='welcome-input'/>  
      <input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} className='welcome-input'/>
      <button className="submit-btn">Submit</button>
    </form>
    <button className="register" onClick={() => setRegister(!register)}>Need to {register ? "login?" : "register?"}</button>
  </div>
  </div>
  )
  };

export default Auth;
