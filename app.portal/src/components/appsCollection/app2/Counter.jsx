import {useState} from 'react';
import './Counter.css';

const Counter = ([editNum, currentNum, increment, decrement, resetNum]) => {
 const [value, setValue] = useState(0);

  return (
    <div>
      <h2>{currentNum}</h2>
      <div>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => resetNum()}>Reset</button>
      <input type='number' value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={() => editNum(value)} >submit</button>
      </div>
    </div>
  )
}

export default Counter;