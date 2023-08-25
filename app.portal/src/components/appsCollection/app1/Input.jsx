import {useState} from 'react';
import {v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line react/prop-types
export const Input = ({createTodo}) => {

  const [value, setValue] = useState("");


  const handleAddTodo = () => {
    if(value === ""){
      alert('please write a todo first!');
      return;
    }
    const newTodo = {
      'id': uuidv4(),
      'content': value
       };
    
    createTodo(newTodo);   
    setValue("");
  }
  

  return (
    <div className='flex '>
     <input 
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder='add todo here..'
      className='shadow-md p-1 mr-2'
      />
      <button onClick={() => handleAddTodo} 
      className='mb-1 bg-gray-500 text-white rounded-md shadow-lg p-2 mt-2 hover:bg-green-400 hover:text-gray-700 hover:font-bold hover:shadow-md'>Add</button>
    </div>
  )
 
}

export default Input;