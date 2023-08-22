import TimerApp from './appsCollection/app6/TimerApp'
//import QuotesApp from './appsCollection/app5/QuotesApp';
import DiceApp from './appsCollection/app4/DiceApp';
import StopWatchApp from './appsCollection/app3/StopWatchApp';
import WeatherApp from './appsCollection/app7/WeatherApp';
//import CountApp from './appsCollection/app2/CountApp';
//import TodoApp from './appsCollection/app1/TodoApp';
import MusicApp from './appsCollection/app8/MusicApp';
import CatQuizApp from './appsCollection/app9/CatQuizApp';

const AppContainer = () => {
  return (
    <>
    <h2 className='text-black-500 mt-5 mb-5 text-xl text-center'>My Simple app collections</h2>
    <div  className='text-black-500 mt-5 text-medium text-center flex flex-wrap justify-center'>

    

    <div className='bg-gray-100 shadow-lg p-8 m-5 flex-grow'>
      <MusicApp />
    </div>

    <div className='bg-gray-100 shadow-lg p-8 m-5 w-72'>
      <CatQuizApp />
    </div>

      <div className='bg-gray-100 shadow-lg p-8 m-5 w-72 '>
      <WeatherApp />
      </div>

      <div className='bg-gray-100 shadow-lg p-8 b-5 w-72'>
      <TimerApp />
      </div>

      {/*<div className='bg-gray-100 shadow-lg p-8 m-5 w-72'>
      <QuotesApp />
  </div>*/}

     <div className='bg-gray-100 shadow-lg p-8 m-5 w-72'>
      <DiceApp />
      </div>

      <div className='bg-gray-100 shadow-lg p-8 m-5 w-72'>
      <StopWatchApp />
      </div>

      {/*<div className='bg-gray-100 shadow-lg p-8 m-5 w-72'>
      <CountApp />
</div>*/}

      {/*<div className='bg-gray-100 shadow-lg p-8 m-5 w-72'>
      <TodoApp />
</div>*/}


    </div>
    </>
  )
}

export default AppContainer;