
import { useEffect, useState } from 'react'
import WeatherContainer from './components/WeatherContainer';
import axios from 'axios';
import background from "/fondo.jpg";
import './App.css'


function App() {
  const [weather, setWeather] = useState(null)

  //peticion Api//

    const success = (pos) => {
    const lat =pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY ="9688409e6c1d8a4d4e8f896c740617b9";

    axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    ) 
    .then(({ data }) => setWeather(data))
    .catch((err) => console.log(err));

  };

//peticion datos geologicos//
  useEffect(() => {  
    navigator.geolocation.getCurrentPosition(success);
  }, []);


  //fondo app//
  <div style={{ backgroundImage: `url(${background})` }}>
</div>

//Estructura padre//
  return (  
  <main className='font-["Lato"] flex justify-center
  items-center min-h-screen bg-purple-950 text-black px-2 bg-[url("/fondo.jpg")] bg-cover bg-center' >
    {
      weather === null ? (
      <h3 className="">Cargando...</h3> 
      ) : (
        <WeatherContainer weather={weather} />
      )}
      </main>
  );
}

export default App
