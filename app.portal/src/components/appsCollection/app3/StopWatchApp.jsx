import { useState, useRef} from 'react';

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
          <button className='bg-gray-500 text-white rounded-md shadow-lg p-2 mt-2 hover:bg-red-400 hover:text-gray-700 hover:font-bold hover:shadow-md' onClick={handlePause}>Pause</button> 
        ) : (
          <button className='bg-green-500 font-bold text-white rounded-md shadow-lg p-2 mt-2 mr-1 ml-1 hover:bg-green-700 hover:text-white bold hover:shadow-md' onClick={handleStart}>Start</button>
        )}
        <button className='bg-gray-500 text-white rounded-md shadow-lg p-2 mt-2 mr-1 ml-1 hover:bg-blue-400 hover:text-white hover:font-bold hover:shadow-md' onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default StopWatchApp;
