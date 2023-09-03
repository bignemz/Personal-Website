import React from 'react'
import './Introduction.scss'


function Introduction(Prop) {

  return (
    <div className={`Intro ${Prop.Toggle ? 'active' : ''}`}>

      <h1>SERVICE</h1>

      <div className= {`Intro-service  ${Prop.Toggle ? 'active' : ''}`}> 
        <div className='Service-section'> 
          <h2>01</h2>
          <h2>HTML</h2>
          <p>HTML may be a fundamental language for web development, but it offers plenty of opportunities for creativity and fun, making it an enjoyable language to work with for both beginners and experienced developers..</p>
        </div>
        <div className='Service-section'>
          <h2>02</h2>
          <h2>CSS/ SCSS</h2>
          <p>CSS is not just a practical tool, it's  my canvas for creativity. It empowers web designers and developers to bring their ideas to life and create visually stunning and engaging websites and web applications.</p>
        </div>
        <div className='Service-section'>
          <h2>03</h2>
          <h2>JAVASCRIPT</h2>
          <p>In the ever-evolving landscape of web development, there exists a secret weapon, a versatile tool that stands out amidst the chaos of programming languages and technologies. Its name is JavaScript, and it's more than just lines of code; it's a source of endless fun, creativity, and even a few quirks</p>
        </div>
        <div className='Service-section'>
          <h2>04</h2>
          <h2>REACT</h2>
          <p>In the ever-evolving world of web development, React has emerged as a shining star, enchanting me with its simplicity, power, and undeniable charm. In this whimsical exploration</p>
        </div>
      </div>

      <div className= {`Intro-project ${Prop.Toggle ? 'active' : ''}`}>
        <h1>Project</h1>
        <img   src="./image/image7.jpeg"alt=""/>
      </div>

      <div className= {`Intro-photo ${Prop.Toggle ? 'active' : ''}`}>
        <h1>Photos</h1>

        <div className='Photo-section'>  
           <div className='Photo'> <img src="./image/image1.jpeg"alt=""/></div>
           <div className='Photo'> <img src="./image/image2.jpeg" alt=""/></div>
           <div className='Photo'> <img src="./image/image3.jpeg" alt=""/></div>
           <div className='Photo'>  <img src="./image/image6.jpeg" alt=""/></div>
        </div>
     
        

      </div>


      

    </div>
  )
}

export default Introduction
