import { useState,useEffect } from 'react'
import {TiWeatherPartlySunny} from 'react-icons/ti'


const WeatherApp = () => {
  
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [location, setLocation] = useState({
    "country": '',
    "city": ''
  });
  const [isRunning, setIsRunning] = useState(false)
 const [data, setData] = useState({});

 /* const [weatherInfo, setWeatherInfo] = useState({
    "min-temp": null,
    "max-temp": null,
    "cloud-pct": null,
    "humidity": null,
  })*/

const formatted = (str) => {
    const newStr = str.charAt(0).toUpperCase() + str.slice(1);
    return newStr;
  }

const handleSubmit = () => {
  //console.log(value1, value2);
  setLocation({
    "country" : value1,
    "city": value2
  })
  setIsRunning(true);
}



  useEffect(() => {
   let options = {
    method: 'GET',
    headers: {'X-Api-Key': import.meta.env.VITE_WEATHER_KEY}
   }

   
    const url = 'https://api.api-ninjas.com/v1/weather?city='+ location.city;
   if(isRunning){
    fetch(url, options).then((response) => response.json())
    .then((res) => {
      const result = { "min_temp":res.min_temp, "max_temp": res.max_temp, "cloud_pct":res.cloud_pct, "humidity":res.humidity};
      setData(result)
      //console.log(data)
      setIsRunning(false);
      })
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[handleSubmit]);


  return (
    <>
    <div >
      <h2 className='text-xl mb-2'><TiWeatherPartlySunny className='inline-block align-center mr-2 mb-2' />Weather app</h2>
      <p>Input location</p>
      <div className='mt-2'>
        <div >
        <input 
        type='text'
        name={"country"}
        value={value1}
        required
        placeholder='Country'
        onChange={(e) => setValue1(formatted(e.target.value))}
        className='mb-2 bg-white shadow-md p-1'/>
        <input 
        type='text'
        name={"city"}
        value={value2}
        required
        placeholder='City'
        onChange={(e) => setValue2(formatted(e.target.value))}
        className='mb-2 bg-white shadow-md p-1'/>
        </div>
        <button onClick={handleSubmit}
        className='bg-blue-400 text-white font-bold  rounded-md shadow-lg p-1 mt-2 hover:bg-blue-700 hover:text-white hover:shadow-md'>Submit</button>
      </div>
      <div>
        {location.city ? (<h3 className='mt-2 font-bold'>{location.country} : {location.city}</h3>) : <h3></h3>}
        <ul className='mt-2'>
          <h3>Currentry weather is..</h3>
          <li className='mt-2'>min: temp{data.min_temp}</li>
          <li className='mt-2'>max temp: {data.max_temp}</li>
          <li className='mt-2'>cloud: {data.cloud_pct} %</li>
          <li className='mt-2'>humidity: {data.humidity} %</li>
        </ul>

        
      </div>
      
    </div>
    </>
  )
}

export default WeatherApp;
