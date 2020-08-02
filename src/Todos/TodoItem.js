import React, { useContext } from 'react';
import Context from '../Context/Context';

let TodoItem = ({todo, index}) => {
    let {removeTodo, toggleTodo} = useContext(Context);

    return (
        <div className='todo-item'>
            <label>
                <input 
                    type='checkbox' 
                    className='filled-in' 
                    checked={todo.completed} 
                    onChange={() => toggleTodo(todo.id)}/>
                
                <span 
                    className={todo.completed ? 'completed-todo' : undefined} 
                    style={{fontSize: '1.2rem', color: '#000'}}>
                        <strong>
                            {index + 1}
                        </strong>
                        &nbsp;
                        {todo.title}
                </span>
            </label>
            <div className='waves-effect waves-light btn-small' onClick={() => removeTodo(todo.id)}>
                &times;
            </div>
        </div>
    )
}

export default TodoItem;