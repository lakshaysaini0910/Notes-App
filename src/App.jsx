import './App.css'
import Navbar from './components/navbar'
import {Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";


function App() {


  return (
    <>

      <Navbar />

     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
     

      <footer>
        <p>&copy; 2026 Lakshay Saini</p>
      </footer>

    </>
  )
}

export default App
