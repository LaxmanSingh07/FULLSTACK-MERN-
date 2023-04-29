import React from 'react'
import { useNavigate } from 'react-router-dom';
export const Support = () => {
    const navigate=useNavigate();
    function clickHandler() {
        //navigate to Labs page
        navigate('/labs');
    }

  return (
    <>
    <div>Support</div>
    <button onClick={clickHandler} >Move to labs page</button>
    </>
  )
}
