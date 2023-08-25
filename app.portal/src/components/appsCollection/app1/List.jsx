import {BsTrash } from 'react-icons/bs';
import {useState} from 'react';

 // eslint-disable-next-line react/prop-types
 export const List = ({todos, deleteTodo}) => {


   const arr = todos[0];

   const [checked, setChecked] = useState(false)

  return (
    <div className='mt-3 w-2/3 mx-auto'>
      <ul className='divide-y divide-gray-400 '>

      {arr.map((todo) => {
        return (
        <li className="flex justify-center" key={todo.id}>
          <input type='checkbox' value={checked} onChange={() => setChecked(checked => !checked)}
          className='mr-2'/>
          <h3 className='mb-1'>{todo.content}</h3> 
          <button onClick={() => deleteTodo(todo.id)}><BsTrash className='ml-2 text-gray-500 hover:text-blue-300'/></button>
       </li>)
      })}
      </ul>
    </div>
  )
 }

 export default List;