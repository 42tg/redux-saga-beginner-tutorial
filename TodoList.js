import React, { PropTypes } from 'react'

const Todo = ({id, completed, text, toggleFunction, deleteFunction}) => 
<li
    style= {{
        textDecoration: completed ? 'line-through' : 'none'
    }}> 
    <span onClick={() => toggleFunction(id)}>{text}</span>
    <button onClick={() => deleteFunction(id)}>Delete</button>
</li>

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    toggleFunction: PropTypes.func.isRequired,
    deleteFunction: PropTypes.func.isRequired
}

const TodoList = ({value, onCreate, onToggle, onDelete}) => {
    let input    
    return(
    <div>
        <ul>
            {value.map(todo => <Todo key={todo.id} {... todo} toggleFunction={onToggle} deleteFunction={onDelete}/>)}
        </ul>
        {' '} 
        <input type="text" ref={node => input = node}/><button onClick={() => {
            onCreate(input.value)
            input.value=''
        }}>create</button>
    </div>
    )
}

TodoList.propTypes = {
    value: PropTypes.array.isRequired,
    onCreate: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default TodoList
