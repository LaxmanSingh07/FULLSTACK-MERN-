import "./App.css";
import { useState } from "react";

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
    email: "",
    comments: "",
    isVisible: true, //checkbox
    mode: "", //radio
    favCar:"", //select
  });

  function changeHandler(event) {
    // console.log(formData.email);
    // console.log(formData);
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function SubmitEvent(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={SubmitEvent}>
        <input
          type="text"
          placeholder="first name"
          // onChange={changeFirstNameHandler}
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <input
          type="text"
          placeholder="last name"
          // onChange={changeSecondNameHandler}
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <br />

        <input
          type="email"
          placeholder="Email here"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br />

        <textarea
          id=""
          cols="30"
          rows="10"
          name="comments"
          value={formData.comments}
          onChange={changeHandler}
        />

        <br />
        <br />

        <input
          type="checkbox"
          name="isVisible"
          checked={formData.isVisible}
          id="isVisi"
          onChange={changeHandler}
        />
        <label htmlFor="isVisi">Is Visible</label>

        <br />
        <br />

        <fieldset>
          <legend>Mode</legend>

        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Online-Mode"
          id="online"
          checked={formData.mode === "Online-Mode"}
        />
        <label htmlFor="online">Online Mode</label>

        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Offline-Mode"
          id="offline"
          checked={formData.mode === "Offline-Mode"}
        />
        <label htmlFor="offline">Offline Mode</label>


        </fieldset>

        <label htmlFor="favCar">Favourite Car : </label>
        <select
        name="favCar"
        id="favCar"
        value={formData.favCar}
        onChange={changeHandler}

        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        {/* <input type="submit" value="Submit" />
        */}
        <button type="submit">Submit</button>



        

      </form>
    </div>
  );
}

export default App;
