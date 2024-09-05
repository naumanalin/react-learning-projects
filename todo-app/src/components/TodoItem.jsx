function TodoItem({todoName, todoDate, handleDeleteItem}){

    return <div className="container">
                <div className="row my-row"> 
                    <div className="col-6">{todoName}</div>
                    <div className="col-4">{todoDate}</div>
                    <div className="col-2">
                    <button type="button" class="btn btn-danger my-btn"
                    onClick={()=> handleDeleteItem(todoName)}
                    >Delete</button>
                    </div>
                </div>
            </div>
}

export default TodoItem;