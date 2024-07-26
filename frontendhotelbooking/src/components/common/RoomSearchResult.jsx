
import React, { useState } from 'react'
import RoomCard from "../room/RoomCard"
import { Button, Row } from 'react-bootstrap'

const RoomSearchResult = ({results, onClearSearch}) => {

  const [currentPage, setCurrentPage] = useState(1)
  const resultsPerPage = 3
  const totalResults = results.lenght
  const totalPages = Math.ceil(totalResults / resultsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const startIndex = (currentPage - 1) * resultsPerPage
  const endIndex = startIndex + resultsPerPage
  const paginatedResult = results.slice(startIndex, endIndex)

  return (
    <>
    {results.lenght > 0 ? (
      <>
      <h5 className='text-center-mt-5' >Search Result</h5>
      <Row>
        {paginatedResult.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </Row>
      
      <Row>
        {totalResults > resultsPerPage && (
          <RoomPaginator
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

        <Button
          variant='secondary' onClick={onClearSearch} >
          Clear Search
        </Button>
        
      </Row>
      </>
    ): (
      <p></p>
    )}
      
    </>
  )
}

export default RoomSearchResult