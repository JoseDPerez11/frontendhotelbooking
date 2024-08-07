import React from 'react'
import MainHeader from "../layout/MainHeader"

import Parallax from "../common/Parallax"
import HotelService from '../common/HotelService'
import RoomCarousel from '../common/RoomCarousel'
import RoomSearch from '../common/RoomSearch'


const Home = () => {
  return (
    <section>
        <MainHeader />

        <div className='container' >
          <RoomSearch />
          <RoomCarousel />
          <Parallax />
          <RoomCarousel />
          <HotelService />
          <Parallax />
          <RoomCarousel />
        </div>

    </section>
  )
}

export default Home