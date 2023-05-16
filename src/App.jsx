import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import Portfolio from "./Components/Portfolio"
import About from "./Components/Portfolio/About"
import Navbar from "./Components/Navbar"
function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          
      </Routes>
      
    </>
  )
}

export default App
