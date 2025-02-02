import SearchBox from "./SearchBox"; 
import InfoBox from './InfoBox';
import { useState } from 'react';
import "./WeatherApp.css";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(
        {
            city:"Delhi",
            feelsLike: 24.84,
            temp:25.05,
            temp_min: 25.05,
            temp_max:25.05,
            humidity: 47,
            weather:"haze",
            latitude:28.66,
            longitude:77.21,
            windspeed: 2.57,
        }
    );

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h2>Weather Widget!</h2>
            <h3>Stay Ahead with Real-Time Weather Insights – Search Any City Now! 🌦️🌤️</h3>
            <br></br>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
