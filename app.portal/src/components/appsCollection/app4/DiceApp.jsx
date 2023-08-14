import { useState } from 'react'
import './DiceApp.css'
import image from './assets/dice-goonz-goonz-dice.gif'
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

  function stopDice () {
    setThrowDice(true);
    const randomNr1 = Math.floor(Math.random()* 6);
    //const randomNr2 = Math.floor(Math.random()* 6);
      setNumber1(1 + randomNr1);
    //setNumber2(1 + randomNr2);
    }
  
  function startDice () {
    setThrowDice(false);
    
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

  return (
    <>
     <div className='main'>
      <h2>Simple dice app</h2>
        <div className='dice'>
        <p className='box'>
        { throwDice === false ? (
           <img className='diceIMG' src={image} /> ): (<img className='diceIMG' src={thrownDiceImg} />)
        }
       </p>
        </div>
        <div className='buttons'>
      { throwDice ? (
        <button onClick={startDice}>Throw the dice!</button>
      ) : (
        <button onClick={stopDice}>Stop</button>
      )}
        </div>
     </div>
    </>
  )
}

export default DiceApp;
