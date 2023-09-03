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
          <p>for more learning opportunities and projects. I can proudly say I am a critical thinker and a goal-driven problem solver well equipped with the skillsets relatable to HTML, CSS, Javascript, React and Redux programming. I would be delighted to be a part of technological discoveries and game-changing ideas.</p>
        </div>
        <div className='Service-section'>
          <h2>02</h2>
          <h2>CSS/ SCSS</h2>
          <p>for more learning opportunities and projects. I can proudly say I am a critical thinker and a goal-driven problem solver well equipped with the skillsets relatable to HTML, CSS, Javascript, React and Redux programming. I would be delighted to be a part of technological discoveries and game-changing ideas.</p>
        </div>
        <div className='Service-section'>
          <h2>03</h2>
          <h2>JAVASCRIPT</h2>
          <p>for more learning opportunities and projects. I can proudly say I am a critical thinker and a goal-driven problem solver well equipped with the skillsets relatable to HTML, CSS, Javascript, React and Redux programming. I would be delighted to be a part of technological discoveries and game-changing ideas.</p>
        </div>
        <div className='Service-section'>
          <h2>04</h2>
          <h2>REACT</h2>
          <p>for more learning opportunities and projects. I can proudly say I am a critical thinker and a goal-driven problem solver well equipped with the skillsets relatable to HTML, CSS, Javascript, React and Redux programming. I would be delighted to be a part of technological discoveries and game-changing ideas.</p>
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
