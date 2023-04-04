import React from 'react'
import Image1 from '../Images/Image 1.jpg'
import Image2 from '../Images/Image 2.jpg'

const Home = () => {
  return (
    <div className="Home">
      <h1 className='mainTitle'> Digital Design Agency</h1>
      <p className='caption'>We are a full service agency designing digital experiences for large and small businesses alike.</p>
      <br /><br /><br />
      <button>Learn More</button>
      <br /><br /><br /><br />
      <div className="Work">
        <div className="sec">
          <div className="content">
            <h1>Metastaq</h1>
            <p>Metastaq lets brands easily create truly personal Web 3.0 experiences on their own terms.Having thoroughly studied theconcept, client's industry and the targetaudience, we identified all the shortcomingsof the mockup we received from the client,brainstormed new ideas and worked togetherwith the client on the development of a product that would be bound to win in its space.</p>
            <button>View Case Study</button>
          </div>
          <div className="image">
            <img src={Image1} alt="img1" />
          </div>
        </div>
        <br /><br /><br /><br />
        <div className="sec">
        <div className="image">
          <img src={Image2} alt="img2" />
        </div>
        <div className="content">
        <h1>Olumo</h1>
            <p>A web platform built to help companies drive data informed decisions about the culture of their organization. Listening to your team is an important thing.  Being that Olumo brings organizations into an enlightened awareness of the health of their teams well being, it was suitable to design a mark that demonstrated this.</p>
            <button>View Case Study</button>
        </div>
        
        </div>
      </div>
    </div>

  )
}

export default Home