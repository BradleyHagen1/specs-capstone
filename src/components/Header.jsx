import {useContext} from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/authContext";

const Header = () => {
  const {token, logout} = useContext(AuthContext)
  return (
    
      token ? (
        <nav className="nav"  >
      <NavLink to='/home' className='name' >A Cooks Book</NavLink>
      <NavLink to='/add' className='nav-link' >Add Post</NavLink>
      <button onClick={() => logout()} className='nav-link'>Logout</button>
      </nav>
      ) : (
        <div className="auth">
        <h2 >Welcome to A Cooks Book</h2>
        </div>
  )
)
};

export default Header;
