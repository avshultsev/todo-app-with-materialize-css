import React, { useState } from 'react';

let AddTodo = ({addTodo}) => {
    let [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()
        if(value.trim()) {
            addTodo(value)
            setValue('')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='add-todo-form'>
                <div className='input-field col s6'>
                    <input 
                        id='last_name' 
                        type='text' 
                        className='validate' 
                        value={value} 
                        onChange={(event) => setValue(event.target.value)} />
                    <label htmlFor='last_name'>Enter your todo</label>
                </div>
                <button 
                    className='btn waves-effect waves-light' 
                    type='submit' 
                    name='action'>
                    Add
                </button>
            </div>
        </form>
    )
}

export default AddTodo