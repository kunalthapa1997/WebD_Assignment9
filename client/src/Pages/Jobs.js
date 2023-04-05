import React from 'react'
import Cards from '../Components/Cards/Cards'
import Header from '../Components/Header/Header'

const Jobs = () => {
  return (
    <div className="Jobs">
      <Header title="Job Openings" />
      <h1 className='secTitle'>Open Job Openings</h1>
      <Cards/>
    </div>
  )
}

export default Jobs