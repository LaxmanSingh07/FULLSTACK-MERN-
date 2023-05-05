import React from 'react'
import { useNavigate } from 'react-router-dom';
export const Labs = () => {
    const navigate=useNavigate();
    function clickHandler() {
        //navigate to About page
        navigate('/about');


    }
  return (
    <div>
        <div>
        Labs
        </div>
        <button onClick={clickHandler}>Move to About page</button>
    </div>
  )
}
