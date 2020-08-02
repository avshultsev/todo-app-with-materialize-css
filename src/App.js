import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './Todos/TodoList';
import Context from './Context/Context';
import AddTodo from './AddTodo/AddTodo';
import Preloader from './Preloader/Preloader';
import ModalMessage from './ModalMessage/ModalMessage';

function App() {

  let fetchTodos = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    return response.json()
  }

  useEffect(() => {
    fetchTodos()
      .then(json => {
        setTodos(json)
        setFetching(false)
      })
  }, [])

  let [todos, setTodos] = useState([])
  let [isFetching, setFetching] = useState(true)
  let [isModalOpen, setModal] = useState(true)
   
  let toggleTodo = id => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }))
  }

  let removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  let addTodo = title => {
    setTodos([...todos, {
      id: todos.length + 1,
      completed: false,
      title
    }])
  }

  let closeModal = () => {
    setModal(false)
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <h1>My todo-list</h1>
        <AddTodo addTodo={addTodo}/>
        <Context.Provider value={{todos, removeTodo, toggleTodo}}>
          {isFetching ? 
            <Preloader /> : 
            todos.length === 0 ?
              <h3>No todos!</h3> :
              <TodoList />}
        </Context.Provider>

        {isModalOpen && <ModalMessage closeModal={closeModal} />}
      </div>
    </div>
  );
}

export default App;