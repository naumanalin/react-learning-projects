import AppName from './components/AppName'
import Addtodo from './components/Addtodo'
import TodoItem from './components/TodoItem'
import "./App.css";

function App() {
  return <center className="todo-container">
    <AppName/>
    <Addtodo/>
    <div className="item-container">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </div>
  </center>
}

export default App
