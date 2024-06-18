import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '/node_modules/bootstrap/dist/js/bootstrap.min.js'
import EditRoom from "./components/room/EditRoom"
import Home from "./components/home/Home"
import ExistingRooms from './components/room/ExistingRooms'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return(
    
    <>
      
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            
          </Routes>
        </Router>
      </main>
      
    </>
  )
}

export default App
