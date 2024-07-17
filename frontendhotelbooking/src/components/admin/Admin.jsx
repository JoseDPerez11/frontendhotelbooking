import React from 'react'
import { Link } from "react-router-dom"

const Admin = () => {
  return (
    <section className='container mt-5' >
       <h2> welcome to Admin Panel </h2>
       <hr />
       <Link to={"/existing-room"} >manage rooms</Link>
       <Link to={"/existing-bookings"} >manage rooms</Link>
    </section>
  )
}

export default Admin