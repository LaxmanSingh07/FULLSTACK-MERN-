import './App.css';
import {useState} from "react"

function App() {


  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  // function changeFirstNameHandler(event){
  //   // console.log(event.target.value)
  //   // console.log(event.target)
  // console.log(firstName,lastName)

  //   setFirstName(event.target.value)

  // }
  // function changeSecondNameHandler(event){
  //   // console.log(event.target.value)
  //   // console.log(event.target)

  //   setLastName(event.target.value)
  // }


  //all in one 

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })


  function changeHandler(event){
    console.log(formData.email);
    setFormData(
      prevFormData=>{
        return{
          ...prevFormData,
          [event.target.name]: event.target.value
        }
    })
  }

  return (
    <div className="App">
      <form>
        <input type="text" 
        placeholder="first name" 
        // onChange={changeFirstNameHandler}
        onChange={changeHandler}
        name='firstName'
        />

        <input type="text" 
        placeholder="last name" 
        // onChange={changeSecondNameHandler}
        onChange={changeHandler}
        name='lastName'
        />

        <br/>

        <input type="email" placeholder='Email here'  onChange={changeHandler} name="email"/>
      </form>
    </div>
  );
}

export default App;
