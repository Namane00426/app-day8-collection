import {useState, useEffect, useRef} from 'react';

const TimerApp = () => {
  const [counter, setCounter] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [value, setValue] = useState(null);
  const intervalRef = useRef(null);
  const seconds = ['select ', 5, 10, 15, 30];
  const  alert = new Audio('/alert.wav');

  const handleStart = () => {
    setCounter(value);
    setIsRunning(true);
    
  }

  useEffect(() => {
    if(isRunning) {
      const timerId = setInterval(() => {
        if(counter === 1) {
          alert.play();
        }
        if(counter === 0) {
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
      <button className='bg-green-500 font-bold text-white rounded-md shadow-lg p-2 mt-2 mr-1 ml-1 hover:bg-green-700 hover:text-white bold hover:shadow-md' onClick={handleStart}>Start</button>
      </div>
      { counter > 0 ? (<h3>{counter}</h3>) : (<p> <span>Time is up ! Set new time again.</span></p>)}
      <button className='bg-red-400 text-white font-bold rounded-md shadow-lg p-2 mt-2 hover:bg-red-700 hover:text-white  hover:shadow-md' onClick={handleStop}>Stop</button>
      
      <button className='bg-gray-500 text-white rounded-md shadow-lg p-2 mt-2 mr-1 ml-1 hover:bg-blue-400 hover:text-white hover:font-bold hover:shadow-md' onClick={handleReset}>Reset</button>
      
      
     </div>
    </>
  )
}

export default TimerApp;