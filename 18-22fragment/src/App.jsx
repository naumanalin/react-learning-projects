import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import './App.css'

function App() {
  let foodItems =['Dal', 'roti', 'goshat', 'malik'];
  // let foodItem = [];

  return <>
    <div>Healthy Food</div>
    <ul className="list-group">
      <ErrorMessage foodItems={foodItems} />
      <FoodItems foodItems={foodItems} />    
    </ul>
  </> 
  
}

export default App

// three way for condiational statements
// 1. if/else 2. Ternary operators 3. logical operator
// let emptyMessage = foodItem.length === 0 ? <h3>I'm still hungry</h3>:null
// {emptyMessage} 