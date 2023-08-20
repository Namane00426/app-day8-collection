import { useState } from 'react'
import image from './assets/dice-goonz-goonz-dice.gif'
import image2 from './assets/dice-roll.s.gif'
import dice1 from './assets/dice-one.png'
import dice2 from './assets/dice-2.png'
import dice3 from './assets/dice-3.png'
import dice4 from './assets/dice-4.png'
import dice5 from './assets/dice-5.png'
import dice6 from './assets/dice-6.png'

function DiceApp() {
  const [number1, setNumber1] = useState(1);
  //const [number2, setNumber2] = useState(1);
  const [throwDice, setThrowDice] = useState(false);
  const [thrownDiceImg, setThrownDiceImg] = useState('');
  const [throwAgain, setThrowAgain] = useState(false);


//1. start - throw the dice, 2. on throwoing 3. stop the dice
  function stopDice () {
    const randomNr1 = Math.floor(Math.random()* 6);
    //const randomNr2 = Math.floor(Math.random()* 6);
      setNumber1(1 + randomNr1);
    //setNumber2(1 + randomNr2);
    return number1;
    }

  function startDice () {
    setThrowDice(true);
    setThrownDiceImg(image2);
    setThrowAgain(false);
  }

  function showDice () {
    setThrowDice(true);
    stopDice();
    setThrowAgain(true);

    switch (number1) {     
      case 1:
        setThrownDiceImg(dice1); 
        break;
      case 2:
        setThrownDiceImg(dice2); 
        break;
      case 3:
        setThrownDiceImg(dice3); 
        break;
      case 4:
        setThrownDiceImg(dice4); 
        break;
      case 5:
        setThrownDiceImg(dice5); 
        break;
      case 6:
        setThrownDiceImg(dice6); 
        break;
      default:
        console.log(`error, invalid number.`);
  }
}

function resetDice() {
  setThrowDice(false);
  setThrownDiceImg(image);
  setThrowAgain(false);
}

  return (
    <>
     <div className='main'>
      <h2>Dice app</h2>
        <div className='dice'>
        <p className='box'>
        { throwDice === false ? (
           <img className='rounded-md shadow-lg' src={image} /> ): (<img className='rounded-md shadow-lg' src={thrownDiceImg} />)
        }
       </p>
        </div>
        <div className='buttons'>
      { throwDice && !throwAgain ? (
        <button className='bg-gray-500 text-white rounded-md shadow-lg p-2 mt-2 hover:bg-red-400 hover:text-gray-700 hover:font-bold hover:shadow-md' onClick={showDice}>Stop!</button>
      ) : (
        <button className='bg-green-500 font-bold text-white rounded-md shadow-lg p-2 mt-2 mr-1 ml-1 hover:bg-green-700 hover:text-white bold hover:shadow-md' onClick={startDice}>{throwAgain? 'Throw again!':'Throw the dice!'}</button>
      )}
        
        <button className='bg-gray-500 text-white rounded-md shadow-lg p-2 mt-2 mr-1 ml-1 hover:bg-blue-400 hover:text-white hover:font-bold hover:shadow-md' onClick={resetDice}>Reset</button>
        </div>
     </div>
    </>
  )
}

export default DiceApp;
