import {useState} from 'react';

const Counter = ([editNum, currentNum, increment, decrement, resetNum]) => {
 const [value, setValue] = useState(0);

  return (
    <div>
      <h2>{currentNum}</h2>
      <div>
      <button className='bg-green-500 font-bold text-white rounded-md shadow-lg p-2 mt-2 mr-1 ml-1 hover:bg-green-700 hover:text-white bold hover:shadow-md' onClick={() => increment()}>+</button>
      <button className='bg-gray-500 text-white rounded-md shadow-lg p-2 mt-2 hover:bg-red-400 hover:text-gray-700 hover:font-bold hover:shadow-md' onClick={() => decrement()}>-</button>
      <button className='bg-gray-500 text-white rounded-md shadow-lg p-2 mt-2 mr-1 ml-1 hover:bg-blue-400 hover:text-white hover:font-bold hover:shadow-md' onClick={() => resetNum()}>Reset</button>
      <input type='number' value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={() => editNum(value)} >submit</button>
      </div>
    </div>
  )
}

export default Counter;