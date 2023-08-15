import { useState,useEffect } from 'react'

import './WeatherApp.css';

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
    <div className='wheather-app'>
      <h2>Weather app</h2>
      <p>Select your location</p>
      <div className='location'>
        <div >
        <input 
        type='text'
        name={"country"}
        value={value1}
        required
        placeholder='Country'
        onChange={(e) => setValue1(formatted(e.target.value))}
        />
        <input 
        type='text'
        name={"city"}
        value={value2}
        required
        placeholder='City'
        onChange={(e) => setValue2(formatted(e.target.value))}
        />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <h3>{location.country} : {location.city}</h3>
        <ul className='results'>
          <li>min: temp{data.min_temp}</li>
          <li>max temp: {data.max_temp}</li>
          <li>cloud: {data.cloud_pct} %</li>
          <li>humidity: {data.humidity} %</li>
        </ul>

        
      </div>
      
    </div>
    </>
  )
}

export default WeatherApp;
