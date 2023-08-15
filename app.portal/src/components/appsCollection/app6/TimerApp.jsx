import {useState, useEffect, useRef} from 'react';
import './TimerApp.css';

const TimerApp = () => {
  const [counter, setCounter] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [value, setValue] = useState(null);
  const intervalRef = useRef(null);
  const seconds = ['select ', 5, 10, 15, 30];
  const  alert = new Audio('../public/alert.wav');

  const handleStart = () => {
    setCounter(value);
    setIsRunning(true);
    
  }

  useEffect(() => {
    if(isRunning) {
      const timerId = setInterval(() => {
        if(counter === 0) {
          alert.play();
          setIsRunning(false);
        }
      },1000)
      return () => clearInterval(timerId)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, counter])
  
  useEffect(() => {
  
    if(counter > 0 && isRunning) {
    intervalRef.current = setInterval(() => setCounter(counter-1), 1000);

    /*if() {
      setInterval(() => alert.play(), 1000);
      clearInterval(intervalRef.current)
    }*/
    
    return () => clearInterval(intervalRef.current);
   
  } else {
    return;
  }

  }, [counter, isRunning])

  const handleStop = () => {
    setValue(counter);
    clearInterval(intervalRef.current)
    setIsRunning(false)
  }

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setCounter(0)
  }

  return (
    <>
     <div className="main">
     <h2>Countdown</h2>
      <div className='top'>
      <select name='seconds' id='second-select' onChange={(e) => setValue(e.target.value)}>
        {seconds.map((opt, i) => 
         <option key={i} value={opt}>{opt}sec</option>
        )}
      </select>
      <button onClick={handleStart}>Start</button>
      </div>
      { counter > 0 ? (<h3>{counter}</h3>) : (<p> <span>Time is up ! Set new time again.</span></p>)}
      <button onClick={handleStop}>Stop</button>
      
      <button onClick={handleReset}>Reset</button>
      
      
     </div>
    </>
  )
}

export default TimerApp;