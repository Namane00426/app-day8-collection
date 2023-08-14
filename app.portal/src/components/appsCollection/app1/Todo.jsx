import {useState} from 'react';
import {List} from './List';
import {Input} from './Input';

export const Todo = () => {

  const startTodo = [
    { id: 1, content: "buy a milk" }, 
    { id: 2, content: "take a walk" }
  ];

  const [todos, setTodos] = useState(startTodo);

  const createTodo = (todo) => {
    const newTodo = [...todos, todo];
    setTodos(newTodo);
  }

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => {
      return todo.id !== id;
    })
    setTodos(newTodo);
  }

  return (
    <div className='main'>
      <h1>Simple TODO List</h1>
      <List deleteTodo={deleteTodo} todos={todos}  />
      <Input createTodo={createTodo}  />
    </div>
  )
}