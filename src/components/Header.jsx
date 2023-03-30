import {useContext} from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/authContext";

const Header = () => {
  const {token, logout} = useContext(AuthContext)
  return (
    
      token ? (
        <nav className="border border-black flex justify-center bg-green-800  text-white font-bold py-4 px-4 rounded-b-lg"  >
      {/* <NavLink to='/'>Auth</NavLink> */}
      <NavLink to='/home' className="bg-white text-black py-.5 px-2 border border-black rounded">Home</NavLink>
      <NavLink to='/add' className="bg-white text-black py-.5 px-2 border border-black rounded">Add Post</NavLink>
      <button onClick={() => logout()} className="bg-white text-black py-.5 px-2 border border-black rounded">Logout</button>
      </nav>
      ) : (
          <h2 className="flex justify-center">Welcome to food place</h2>
  )
)
};

export default Header;
