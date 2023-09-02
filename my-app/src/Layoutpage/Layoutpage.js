import React from 'react'
import Navbar from '../Navbar/Navbar'
// import Footer from '../Footer/Footer'
import './Layoutpage.scss'

import Introduction from '../Introduction/Introduction'
import About from '../AboutUs/About'




function Layoutpage(Prop) {

  return (
    <div className='Layout'>
      
        
        <About Toggle={Prop.Toggle} />
        <Introduction Toggle={Prop.Toggle}/>
        
      
        

   
     
      
      

    </div>
  )
}

export default Layoutpage
