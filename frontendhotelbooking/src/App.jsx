import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '/node_modules/bootstrap/dist/js/bootstrap.min.js'
import Home from "./components/home/Home"
import AddRoom from "./components/room/AddRoom"
import EditRoom from "./components/room/EditRoom"
import ExistingRooms from './components/room/ExistingRooms'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Footer from "./components/layout/Footer"
import NavBar from './components/layout/Navbar'

function App() {
  return(
    
    <>
      
      <main>
        <Router>
          <NavBar />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path='/add-room' element={<AddRoom />} />
            
          </Routes>
        </Router>
        <Footer />
      </main>
      
    </>
  )
}

export default App
