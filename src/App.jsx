import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import Header from "./components/Header";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={<Auth />} />
        <Route path='/home' element={<Home />} />
        <Route path='/add' element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
