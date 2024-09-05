import TodoItem from './TodoItem';

function TodoItems({ todoItems, handleDeleteItem }) {
    return (
        <div className="item-container">
            {todoItems.map((item, index) => (
                <TodoItem
                    key={index} // Use index if no unique id is available
                    todoName={item.name} // Adjust property name to match the data structure
                    todoDate={item.dueDate} // Adjust property name to match the data structure
                    handleDeleteItem={handleDeleteItem}
                />
            ))}
        </div>
    );
}

export default TodoItems;
