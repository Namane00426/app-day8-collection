/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import './QuotesApp.css'


const QuotesApp = () => {

  const categories = ['age', 'beauty', 'life', 'challenge','select here'];
  
  const sampleQuotes = [
    { text: 'quote-age', author:'bb b', category: 'age', id:0},
    { text: 'quote-beauty', author:'dd d', category: 'beauty', id:1},
    { text: 'quote-life', author:'fff f', category: 'life' , id:2},
    { text: 'quote-challenge', author:'gg g', category: 'challenge',id:3 },
  ]

  const [selected, setSelected] = useState('select here');
  const [quotes, setQuotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState(undefined);
  

  const selectQuote = () => {
    if(selected === 'select here') {
      alert('Select category.');
      return;
    }

    setQuotes(()=> {
      const newQuotes = sampleQuotes.filter((quotes) => {
        return quotes.category === selected;
      })
      setSubmitted(true);
      return newQuotes
    })
  }
  
  const onChange = (e) => {
    setSelected(e.target.value);
    useEffect;
    setSubmitted(false);
  }

  useEffect(() => {
  
  let options = {
    method: 'GET',
    headers: { 'X-Api-Key': 'pH4Qd+lwtjKFBDc+sf+y6w==QZxLBJCHMJ3MmU6K'}
  }
  const selectedCategory = selected;
  let url = 'https://api.api-ninjas.com/v1/quotes?category=' + selectedCategory;
  fetch(url, options)
  .then((response) => 
    response.json()
  ).then((res) =>
    setData([res[0].quote, res[0].author]),
    console.log(data)
    )
  .catch(err => {
      console.log(`error ${err}`)
  })
}, [submitted]);

  return (
    <>
    <main>
     
      <h2>Quote search App</h2>
     <select value={selected} onChange={onChange}>
        { categories.map((opt) => (<option key={opt} value={opt}>
          {opt}
        </option> ))
        }
     </select>

     <div className='result'>
        { submitted ? (<p>Category: {quotes[0].category}</p>) : (<button onClick={() => selectQuote()}>Submit</button>)}
    </div>
    <div>
  <h2 className='quote'>{data[0]}</h2>
      <p>{data[1]}</p>
    </div>

    
      
    </main>
    </>
  )
}

export default QuotesApp;