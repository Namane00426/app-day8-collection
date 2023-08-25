import {useState} from 'react';
import {List} from './List';
 import {Input} from './Input';


const TodoApp = () => {
 
   const startTodo = [
     { id: 1, content: "buy a milk", isDone: false}, 
     { id: 2, content: "take a walk", isDone: false}
   ];

const [todos, setTodos] = useState([startTodo]);

 function createTodo (todo) {
     const newTodoArr = [...todos, todo];
     setTodos(newTodoArr);
   }

 function deleteTodo (id) {
      const newTodo = todos.filter((todo) => {
        return todo.id !== id;
      })
      setTodos(newTodo);
    }



  return (
    <div >
      <h2 className='mb-2 text-xl'>TODO List</h2>
       <Input createTodo={createTodo} />
       
       <List deleteTodo={deleteTodo} todos={todos} /> 
    </div>
  )
};

export default TodoApp;