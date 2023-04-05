import React from 'react'
import Image1 from '../Images/Image 1.jpg'
import Image2 from '../Images/Image 2.jpeg'
import Image3 from '../Images/Image 3.png'
import Image4 from '../Images/Image 4.jpg'

const Home = () => {
  return (
    <div className="Home">
      <h1 className='mainTitle'> Navisite: Cloud Services Enterprise</h1>
      <p className='caption'>The expertise you need to plan, migrate & optimize your business across public, private & hybrid clouds.</p>
      <br /><br /><br />
      <button>Learn More</button>
      <br /><br /><br /><br />
      <div className="Work">
        <div className="sec">
          <div className="content">
            <h1>Microsoft Azure</h1>
            <p>Optimize your Microsoft Azure investment with cloud services from a leading Microsoft Gold Partner and Azure Expert MSP.</p>
            <button>Explore</button>
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
        <h1>AWS</h1>
            <p>Work with an AWS Premier Tier Services Partner to maximize the full power of the AWS cloud.</p>
            <button>Explore</button>
        </div>
        
        </div>
        <br /><br /><br /><br />

        <div className="sec">
          <div className="content">
            <h1>Google Cloud</h1>
            <p>Migrate and run your business on Google Cloud with managed services from a trusted partner.</p>
            <button>Explore</button>
          </div>
          <div className="image">
            <img src={Image3} alt="img3" />
          </div>
        </div>
        <br /><br /><br /><br />

        <div className="sec">
        <div className="image">
          <img src={Image4} alt="img4" />
        </div>
        <div className="content">
        <h1>Virtual Desktops</h1>
            <p>Enable a highly scalable, remote workforce with Navisite's Managed Virtual Desktop Service.</p>
            <button>Explore</button>
        </div>
        
        </div>

      </div>
    </div>

  )
}

export default Home