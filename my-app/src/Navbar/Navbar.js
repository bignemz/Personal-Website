import React from 'react'
import "./Navbar.scss"

function Navbar(Prop) {
 console.log(Prop.Toggle)
  
  return (
    <nav  className={`navbar ${Prop.Toggle ? 'active' : ''}`}>
        <h1>EMEROLE</h1>

        <label className="toggle-switch">
      <input type="checkbox" checked={Prop.Toggle} onChange={Prop.OnToggle} />
      <span className="switch" />
    </label>
  
    </nav>
  )
}


// function Navbar(props) {
//   console.log(props.Toggle)
//   console.log(props.OnToggle)
  
//   return (
//     <nav  className={`navbar ${props.Toggle ? 'active' : ''}`} >
//         <h1>EMEROLE</h1>

//         <label className="toggle-switch">
//       <input type="checkbox" checked={props.Toggle}  onChange={props.Ontoggle} />
//       <span className="switch" />
//     </label>
  
//     </nav>
//   )
// }

export default Navbar