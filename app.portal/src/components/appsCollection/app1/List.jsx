//import {Item} from "./Item";

const List = (deleteTodo, todos) => {

  

 return (
  <ul >
    {todos.map(todo => {
      <li key={todo.id} className='content item'>
      <span>{todo.content}</span>
      <button onClick={() => deleteTodo(todo.id)}>-</button>
    </li>
    })}
  </ul>
 )
}

export default List;