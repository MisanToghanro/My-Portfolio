import About from "./Components.jsx/About"
import Skills from "./Components.jsx/Skills"
import Projects from "./Components.jsx/Projects"
import Contact from "./Components.jsx/Contact"
import Footer from "./Components.jsx/Footer"
import { Routes , Route } from "react-router-dom"
import NavBar from "./Components.jsx/Nav"
import Logo from "./images/Logo.png"
import { NavLink } from "react-router-dom" 

function App() {

  return(
    <div className=" bg-gradient-to-b from-gray-900 to-gray-700"> 
      <header className="flex justify-between p-10 ">
    <NavLink to="/"  className="text-white  hover:text-blue-400 md:pt-4">
      <h2>Misan Toghanro</h2>
    </NavLink>
      <NavBar/>
      </header>

        <Routes>
      <Route path="/" element={<About/>}></Route>
      <Route path="/skills" element={<Skills />}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>  
    
  <Footer/>
    </div>

  )
}
export default App
