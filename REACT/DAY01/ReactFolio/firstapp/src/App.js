// import logo from './logo.svg';
import './App.css';
import Iteam from './components/ProductItem'
import ItemDate from './components/ProudctDate';
import Card from './components/Card';
function App() {
  const products=[
    {
      id:'p1',
      title:'Nirma',
      amount:100,
      date:new Date(2021,7,14)
    },
    {
      id:'p2',
      title:'Detergent',
      amount:200,
      date:new Date(2021,7,14)

     },
    {
      id:'p3',
      title:'Soap',
      amount:300,
      date:new Date(2021,7,14)

     },
     {
      id:'p4',
      title:'Shampoo',
      amount:400,
      date:new Date(2021,7,14)

     },
  ];

  return (
    <div>
      <products items={products}/>
    </div>
  );
}

export default App;
