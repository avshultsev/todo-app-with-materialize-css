import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import Context from '../Context/Context';

let TodoList = () => {
    let {todos} = useContext(Context);

    return (
        <div className='todo-list'>
            {todos.map((todo, index) => <TodoItem key={todo.id} todo={todo} index={index}/>)}
        </div>
    )
}

export default TodoList;