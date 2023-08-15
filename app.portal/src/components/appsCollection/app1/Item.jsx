
const Item =  (deleteTodo,  {todo}) => {
  return(
    <div key={todo.id} className='content item'>
      <span>{todo.content}</span>
      <button onClick={() => deleteTodo(todo.id)}>-</button>
    </div>
  )
}
export default Item;