import React from 'react'
import { Link } from "react-router-dom"

const Admin = () => {
  return (
    <section className='container mt-5' >
       <h2> welcome to Admin Panel </h2>
       <hr />
       <Link to={"/add-room"} >manage rooms</Link>
    </section>
  )
}

export default Admin