import AppName from './components/AppName'
import Addtodo from './components/Addtodo'
import TodoItems from './components/TodoItems';
import "./App.css";

function App() {
  const todoItems = [
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


  return <center className="todo-container">
    <AppName/>
    <Addtodo/>
    <TodoItems todoItems={todoItems} />
  </center>
}

export default App
