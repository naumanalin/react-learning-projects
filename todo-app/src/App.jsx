import AppName from './components/AppName'
import Addtodo from './components/Addtodo'
import TodoItems from './components/TodoItems';
import "./App.css";
import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const initialtodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/24",
    },
    {
      name: "Go to college",
      dueDate: "4/10/24",
    },
    {
      name: "Complete project",
      dueDate: "4/10/24",
    }
  ];

  const [todoItems, setTodoItems] = useState(initialtodoItems);

  const handleNewItem = (itemName, itemDate) => {
    console.log(`New item added, Name: ${itemName} Date: ${itemDate}`);
    const newTodoItems = [...todoItems, {name: itemName, dueDate: itemDate}];
    setTodoItems(newTodoItems)
  }

  const handleDeleteItem = (todoItemName) => {
    const newtodoitemss = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newtodoitemss)
  }

  return <center className="todo-container">
    <AppName/>
    <Addtodo handleNewItem={handleNewItem} />
    {todoItems.length === 0 && <WelcomeMessage />}
    <TodoItems todoItems={todoItems} handleDeleteItem={handleDeleteItem} />
  </center>
}

export default App
