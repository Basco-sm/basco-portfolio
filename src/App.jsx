import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import About from "./pages/About"
import Projects from "./pages/Project"
import Skills from "./pages/Skills"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"

function App() {

  return (
  <BrowserRouter>
  <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
  <Navbar />
  <main className="flex-grow w-full">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </main>
    <Footer />
    </div>
  </BrowserRouter>

  )
}

export default App
