import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const[text,setText]=useState('');
  const[name,setName]=useState('lax');

  //type 1: 

  // useEffect(()=>{
  //   console.log("Ui rendered");
  // });

  // type 2:

  // useEffect(()=>{
  //   console.log("Ui rendered");
  //   },[]);


  //type 3: 

  // useEffect(()=>{
  //   console.log("change observed");
  // },[name]);

  // type 4: to handle unmounting of a component

  useEffect(()=>{
    //add event listener
    console.log("change observed");
    return ()=>{
      //remove event listener
      console.log("clean up");
    }
  },[text]);



  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }
  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
