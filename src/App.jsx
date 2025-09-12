import React from 'react'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Education from './components/Education/Education';
import "./index.css"

const App = () => {
  return (
    <div>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/education' element={<Education/>}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App