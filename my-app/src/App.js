
import React,{useState} from 'react';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';

import Layoutpage from './Layoutpage/Layoutpage';
import About from './AboutUs/About';
import Navbar from './Navbar/Navbar';
// import Layoutpage from './Layoutpage/Layoutpage';
// import Homepage from './Homepage/Homepage';






function App() {

  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);

  return (
    

  
   
    <BrowserRouter>
  <header >
    <Navbar Toggle={isToggled} OnToggle={onToggle}  />
   </header>

    <Routes>
    
            <Route path='/' element={<Layoutpage Toggle={isToggled}/>}/>

          

          

           
        

          
                

            
        
    </Routes>
    </BrowserRouter>
  );
}

export default App;
