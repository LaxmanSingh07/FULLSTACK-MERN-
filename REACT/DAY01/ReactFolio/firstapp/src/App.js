// import logo from './logo.svg';
import './App.css';
import Iteam from './components/Iteam'
import ItemDate from './components/itemDate';
import Card from './components/Card';
function App() {
  const response=[
    {
     itemName:"Sugar",
     itemDate:"20",
     itemMonth:"March",
     itemYear:"2021"
    },
    {
      itemName:"Sugar2",
      itemDate:"21",
      itemMonth:"March2",
      itemYear:"2022"
     },
    {
      itemName:"Noodles",
      itemDate:"21",
      itemMonth:"March2",
      itemYear:"2042"
     }

    
  ]
  return (
    <div>
      <Card>
    
      <Iteam name={response[0].itemName} 
        
      >Hello guys</Iteam>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear} />
      <Iteam name={response[1].itemName} />
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear} />
      <Iteam name={response[0].itemName} />
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear} />

      </Card>

    </div>
  );
}

export default App;
