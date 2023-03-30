// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import Header from "./components/Header";
import AuthContext from "./store/authContext";
import { useContext } from "react";
import { Navigate } from 'react-router-dom'

function App() {
  const {token} = useContext(AuthContext)
  // const Navigate = useNavigate()
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={token ? <Navigate to='/home'/> : <Auth/>} />
        <Route path='/home' element={token ? <Home/> : <Navigate to='/'/>} />
        <Route path='/add' element={token ? <AddPost/> : <Navigate to='/'/>} />
      </Routes>
    </div>
  );
}

export default App;
