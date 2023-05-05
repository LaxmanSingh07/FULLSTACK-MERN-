import './App.css';
import Item from './Item'
import ItemDate from './ItemDate';

import './Item.css'
function App() {
  return (
    <div >
      <Item name="GreyNinja">
      I am extra (if you want to do visible it use props.children)
      </Item>
      <ItemDate day="20" month="June" year="1998"></ItemDate>
      <h1 className='App'>HELLO IN THE WORLD OF REACT</h1>
    </div>
  );
}

export default App;
