import React from 'react'

import './Layoutpage.scss'

import Introduction from '../Introduction/Introduction'
import About from '../AboutUs/About'




function Layoutpage(Prop) {

  return (
    <div className={`Layout ${Prop.Toggle ? 'active' : ''}`}>
      
        
        <About Toggle={Prop.Toggle} />
        <Introduction Toggle={Prop.Toggle}/>
        
      
        

   
     
      
      

    </div>
  )
}

export default Layoutpage
