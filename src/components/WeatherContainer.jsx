import { useState } from "react";
import WeatherStat from "./WeatherStat";

const WeatherContainer = ({weather}) => {    
           {/* unidad temperatura */}
    const [isCelsius, setIsCelsius] = useState(true);

    const changeUnitTemp = (temp) => {
    if (isCelsius){
         //transformacion a celsius//
        const celsiusTemp = (temp - 273.15).toFixed(1);
        return  `${celsiusTemp}°C`;    
    }else{
    //transformacion a fahrenheit //
    const fahrenheitTemp = (((temp - 273.15) * 9/5) + 32).toFixed(1);
    return `${fahrenheitTemp}°F`;
    }
}
 

    const handleChangeUnit = () => {
        setIsCelsius(!isCelsius)
    }

console.log(changeUnitTemp(weather.main.temp));


return (
    <section className="text-center gap-5 grid ">
        <h3 className="text-xl font-semibold">
            {weather.name}, {weather.sys.country}
            </h3> 

        <div className="grid gap-5 sm:grid-cols-[1fr_auto]">            
            {/*seccion superior */}
            <article className="bg-lime-100/50 rounded-2xl grid 
            grid-cols-2 items-center p-3">
                <h4 className="col-span-2 text-lg capitalize">
                {weather.weather[0].
                description}</h4>
                <span className="text-6xl">{changeUnitTemp(weather.main.temp)}
                </span>
                <div>
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                    alt=""
                    />   
                </div>
            </article>

    
            {/* seccion inferior */}
            <article className="grid grid-cols-3 justify-items-center bg-lime-100/50 rounded-2xl p-5 py-3 sm:grid-cols-1">
            <WeatherStat icon="/wind.png"unit="m/s"value={weather.wind.speed} />
            <WeatherStat icon="/humidity.png"unit="%"value={weather.main.humidity} />
            <WeatherStat icon="/pressure.png"unit="hpa"value={weather.main.pressure} />
            </article>

            
        </div>
        <div className="font-bold italic p-2 px-4 border-solid border-4 rounded-full mt-5 mx-auto text-black bg-lime-50/50 hover:bg-white transition-colors"> 
            <button onClick={handleChangeUnit}>C° / F°</button>
        </div>
    </section>
);

};
export default WeatherContainer