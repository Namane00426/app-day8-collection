import {useState} from 'react';
import {v4 as uuidv4 } from 'uuid';

export const Input = (createTodo) => {

  const [value, setValue] = useState("");

  const addTodo = () => {
    if(value === ""){
      alert('please write a todo first!');
      return;
    }

    const newTodo = {
      id: uuidv4(),
      content: value
       };
    createTodo(newTodo);
    setValue("");
  }
  

  return (
    <div className='content'>
      <input 
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder='add todo here..'
      />
      <button onClick={addTodo}>+</button>
    </div>
  )
 
}