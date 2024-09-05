import { useState } from "react";

function Addtodo({handleNewItem}) {

    const [todoName , setTodoName] = useState();
    const [dueDate, setDueDate] = useState();

    const handleNameChange = (event) => {
        setTodoName(event.target.value)
    }

    const handleDateChange = (event) => {
        setDueDate(event.target.value)
    }

    const handleAddButtonClicked = () => {
        handleNewItem(todoName, dueDate);
        setTodoName("");
        setDueDate("");
    }

    return <div className="container text-start">
            <div className="row my-row ">
                <div className="col-6">
                    <input type="text" placeholder="Enter todo here" value={todoName} onChange={handleNameChange} />
                </div>
                <div className="col-4">
                    <input type="date" value={dueDate} onChange={handleDateChange} />
                </div>
                <div className="col-2">

                    <button type="button" className="btn btn-success my-btn"

                    onClick={handleAddButtonClicked}

                    >Add</button>

                </div>
            </div>
    </div>
}

export default Addtodo;