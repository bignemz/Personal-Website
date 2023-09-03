import React from 'react'
import "./About.scss"





function About(Prop) {
  return (
    <div className= {`About-section  ${Prop.Toggle ? 'active' : ''}`}>

      <div className='About-name'>
        <h1>EMEROLE CHINAEME</h1>
        <h5>Frontend Developer</h5>
      </div>

      <div className='About-image'>
      <img src="./image/image9.jpeg" alt=""/>
      </div>  
    
    </div>
  )
}

export default About
