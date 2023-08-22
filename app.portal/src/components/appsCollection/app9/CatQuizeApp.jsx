import  {BiSolidCat} from 'react-icons/bi';
import  {useState} from 'react'

const CatQuizeApp = () => {

  //const defaultAnswer = ['Mix', 'American short hair', 'Sffinx'];
  //const [selectAnswers, setSelectAnswers] = useState(defaultAnswer);
 // const [value, setValue] = useState('');
  //onst [correctAnswer, setCorrectAnswer] = useState('Mix');
  //const [isCorrect, setIsCorrect] = useState(false);
  const [url, setUrl] = useState('');

  const fetchUrl = `https://api.thecatapi.com/v1/images/search?&breed_ids`;
  //const api_key = import.meta.env.VITE_QUIZ_APP_ID;
  
  const fetchData = async () =>  {
    await fetch(fetchUrl).then(res => {
      if(res.ok){
        return res.json();
      }
      throw new Error('Request failed');
    }, networkError => console.log(networkError.message)
    ).then(jsonRes => {
      setUrl(jsonRes[0].url)
      console.log([jsonRes[0]])
      
    })
  }
  
  // const checkAnswer = ( ) => {
  //   if(isCorrect){
  //     return 'You are Correct!'
  //   } else {
  //     return 'Boo! Not correct!'
  //   }
  // }

  // const handleAnswer = (value) => {
  //   setIsCorrect(false);
  // if(value == correctAnswer){
  //   console.log('correct')
  //   setIsCorrect(true)
  // } else {
  //   setIsCorrect(false);
  // }
   
  // }

  return (
    <>
    <h2 className='text-xl mb-2'><BiSolidCat className='inline-block align-center mr-2 mb-2' />Cat Quize App</h2>

      <button onClick={fetchData}>Start!</button>
      <img src={url} className='w-56'/>
      <p>Select this cats breed from berow!</p>
      
      {/* <form onSubmit={handleAnswer}>
        <select name={selectAnswers} onChange={(e) => setValue(e.target.value)}>
          {selectAnswers.map((opt, i) => 
        
        <option key={i+1} value={opt}> No.{i+1} - {opt}</option>)}
        </select>
        <button className='bg-green-500 font-bold text-white rounded-md shadow-lg p-2 mt-2 mr-1 ml-1 hover:bg-green-700 hover:text-white bold hover:shadow-md' type='submit'>Submit</button>
      </form>
      <h3>The answer is...{correctAnswer}. {checkAnswer()}</h3> */}
    </>
  )
}

export default CatQuizeApp;