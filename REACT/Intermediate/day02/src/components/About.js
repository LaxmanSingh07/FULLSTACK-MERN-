import React from 'react'
import { useNavigate } from 'react-router-dom'
export const About = () => {
    const navigate=useNavigate();
    function clickHandler() {
        //navigate to Support page
        navigate('/support');
    }
    
  return (
    <div>
    <div>About</div>
    <button onClick={clickHandler}>Move to Support Page</button>
    </div>
  )
}
