import { useRef, useState } from "react";
// import { createLogger } from "vite";

function Addtodo({handleNewItem}) {

    // const [todoName , setTodoName] = useState();
    // const [dueDate, setDueDate] = useState();

    // const handleNameChange = (event) => {
    //     setTodoName(event.target.value)
    // }

    // const handleDateChange = (event) => {
    //     setDueDate(event.target.value)
    // }


    // using useRef hook for form handling
    const todoNameElement = useRef();
    const dueDateElement = useRef();

    const handleAddButtonClicked = (event) => {
        event.preventDefault();
        // handleNewItem(todoName, dueDate);
        // setTodoName("");
        // setDueDate("");

        const todoName = todoNameElement.current.value;
        const dueDate =  dueDateElement.current.value;
        todoNameElement.current.value = "";
        dueDateElement.current.value = "";
        handleNewItem(todoName, dueDate);

    }

    return <div className="container text-start">
            <form  onSubmit={handleAddButtonClicked} className="row my-row ">
                <div className="col-6">
                    {/* <input type="text" placeholder="Enter todo here" value={todoName} onChange={handleNameChange} /> */}
                    <input type="text" placeholder="Enter todo here" ref={todoNameElement} />

                </div>
                <div className="col-4">
                    {/* <input type="date" value={dueDate} onChange={handleDateChange} /> */}
                    <input type="date" ref={dueDateElement} />

                </div>
                <div className="col-2">

                    <button type="submit" className="btn btn-success my-btn"
                    >Add</button>

                </div>
            </form>
    </div>
}

export default Addtodo;