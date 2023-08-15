import TimerApp from './appsCollection/app6/TimerApp'
//import QuotesApp from './appsCollection/app5/QuotesApp';
import DiceApp from './appsCollection/app4/DiceApp';
import StopWatchApp from './appsCollection/app3/StopWatchApp';
import WeatherApp from './appsCollection/app7/WeatherApp';
//import CountApp from './appsCollection/app2/CountApp';
//import TodoApp from './appsCollection/app1/TodoApp';

const AppContainer = () => {
  return (
    <>
    <h2>My Simple app collections</h2>
    <div className='app-big-container'>
      <div className='app-container'>
      <WeatherApp />
      </div>

      <div className='app-container'>
      <TimerApp />
      </div>

      {/*<div className='app-container'>
      <QuotesApp />
  </div>*/}

     <div className='app-container'>
      <DiceApp />
      </div>

      <div className='app-container'>
      <StopWatchApp />
      </div>

      {/*<div className='app-container'>
      <CountApp />
</div>*/}

      {/*<div className='app-container'>
      <TodoApp />
</div>*/}

    </div>
    </>
  )
}

export default AppContainer;