import {useState} from 'react';
//import './CountApp.css';
import Counter from './Counter';

function CountApp() {

const [currentNum, setCurrentNum] = useState(0);
const currentZero = 0;

const increment = () => {
  setCurrentNum(currentNum + 1);
}

const decrement = () => {
  if(currentNum <= 0) {
    alert('Please reset! this is already 0.');
    return;
  }
  setCurrentNum(currentNum - 1);
}

const resetNum = () => {
  setCurrentNum(currentZero);
}

const editNum = (value) => {
  if(value === '') {
    alert('Please input some number');
    return;
  } else if (value < 0 ){
    alert('invalid number!');
    return;
  } 
  setCurrentNum(value);
}

  return (
    <div className="App">
      <h2>Simple Counter</h2>
      <Counter currentNum={currentNum} increment={increment} decrement={decrement} resetNum={resetNum} editNum={editNum}/>
     
    </div>
  );
}

export default CountApp;
