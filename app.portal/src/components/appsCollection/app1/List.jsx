import {Item} from './Item';

export const List = (deleteTodo, todos) => {

 return (
  <div >
    {todos.map((todo) => {
      return <Item key={todo.id} deleteTodo={deleteTodo} todo={todo} 
      />
    })}
  </div>
 )
}