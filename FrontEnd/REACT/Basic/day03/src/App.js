import './App.css';
import { useState } from 'react';
import Tours from './components/Tours';
import data from './data'
function App() {

  const [tours,settours]=useState(data);
  function removeTour(id)
  {
    const newTours=tours.filter(tour=>tour.id!==id);
    settours(newTours);
  }

  if(tours.length===0)
  {
    return (
      <div className='refresh'>
        <h1>No Tours left</h1>
        <button className="btn-white" onClick={()=>{
          settours(data);
        }}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className='App'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
