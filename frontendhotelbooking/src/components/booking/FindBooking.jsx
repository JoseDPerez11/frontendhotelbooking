
import React, { useState } from 'react'
import { cancelBooking, getBookingByConfirmationCode } from "../utils/ApiFunctions"

const FindBooking = () => {
  
  const [confirmationCode, setConfirmationCode] = useState("")
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [bookingInfo, setBookingInfo] = useState({
    id: "",
    bookingConfirmationCode: "",
    room: {id: "", roomType: "" },
    roomNumber: "",
    checkInDate: "",
    checkOutDate: "",
    guestFullName: "",
    guestEmail: "",
    numOfAdults: "",
    numOfChildren: "",
    totalNumOfGuests: ""
  })

  const emptyBookingInfo = {
    id: "",
    bookingConfirmationCode: "",
    room: {id: "", roomType: "" },
    roomNumber: "",
    checkInDate: "",
    checkOutDate: "",
    guestFullName: "",
    guestEmail: "",
    numOfAdults: "",
    numOfChildren: "",
    totalNumOfGuests: ""
  }

  const [isDeleted, setIsDeleted] = useState(false)

  const handleInputChange = (e) => {
    setConfirmationCode(e.target.value)
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const data = await getBookingByConfirmationCode(confirmationCode)
      setBookingInfo(data)
      setError(null)
    } catch (error) {
      setBookingInfo(emptyBookingInfo)
      if(error.response && error.response.status === 404) {
        setError(error.response.data.message)
      } else {
        setError(error.message)
      }
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const handleBookingCancellation = async(bookingId) => {
    try {
      await cancelBooking(bookingInfo.id)
      setIsDeleted(true)
      setSuccessMessage("booking has been cancelled successfully!")
      setBookingInfo(emptyBookingInfo)
      setConfirmationCode("")
      setError("")
    } catch (error) {
      setError(error.message)
    }
    setTimeout(() => {
        setSuccessMessage("")
        setIsDeleted(false)
    }, 2000)
  }

  
  return (
    <>
    <div className='container mt-5 d-flex flex-column justify-content-center align-items-center'>
      <h2>Find My Booking</h2>
      
      <form onSubmit={handleFormSubmit} className='col-md-6' >
        <div className='input-group mb-3' >
          <input
            className='form-control' 
            id="confirmationCode" 
            name="confirmationCode"
            value={confirmationCode}
            onChange={handleInputChange}
            placeholder='enter the booking confirmation code'
          />

          <button className='btn btn-hotel input-group-text' >Find booking</button>
        </div>
      </form>

      {isLoading ? (
        <div>finding booking...</div>
      ): error ? (
        <div className='text-danger' > Error: { error }</div>
      ): bookingInfo.bookingConfirmationCode ? (
        <div className='col-md-6 mt-4 mb-5' >
          <h3>booking information</h3>
          <p>Booking confirmation code: {bookingInfo.bookingConfirmationCode} </p>
          <p>Booking id: {bookingInfo.id} </p>
          <p>Room Number: {bookingInfo.room.id} </p>
          <p>Room Type: {bookingInfo.room.roomType}</p>
          <p>Check-in Date: {bookingInfo.checkInDate} </p>
          <p>Check-out Date: {bookingInfo.checkOutDate} </p>
          <p>Full Name: {bookingInfo.guestFullName} </p>
          <p>Email Address: {bookingInfo.guestEmail} </p>
          <p>Adults: {bookingInfo.numOfAdults} </p>
          <p>Children: {bookingInfo.numOfChildren} </p>
          <p>Total Guest: {bookingInfo.totalNumOfGuests} </p>

          {!isDeleted && (
            <button className='btn btn-danger' onClick={() => handleBookingCancellation(bookingInfo.id)} >
                cancel booking
            </button>
          )}
        </div>
      ): (
        <div> find booking ... </div>
      )}

      {isDeleted && (
        <div className='alert alert-success mt-3' role="alert" > {successMessage} </div>
      )}

    </div>

    </>
  )
}

export default FindBooking