import { useState, useRef} from 'react';
import './StopWatchApp.css';

const StopWatchApp = () => {
const [count, setCount] = useState(0);
const [started, setStarted] = useState(false);
const intervalRef = useRef(null);
 
  function handleStart() {
   setStarted(true);
   intervalRef.current = setInterval(() => {
    setCount(prevTime => prevTime + 10);
   }, 10)
  }

  function handlePause() {
   setStarted(false);
   clearInterval(intervalRef.current);
  }

  function handleReset() {
   clearInterval(intervalRef.current);
   setStarted(false);
   setCount(0);
  }

 const milliseconds = `0${(count % 1000) / 10}`.slice(-2);
 const seconds = `0${Math.floor(count / 1000) % 60}`.slice(-2);
 const minutes = `0${Math.floor(count / 60000) % 60}`.slice(-2);
 const hours = `0${Math.floor(count / 3600000)}`.slice(-2);

  return (
    <>
      <div className='stopWatch-main'>
        <h2>Stopwatch</h2>
        <p>{hours}:{minutes}:{seconds}:{milliseconds}</p>
        {started ? (
          <button onClick={handlePause}>Pause</button> 
        ) : (
          <button onClick={handleStart}>Start</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default StopWatchApp;
