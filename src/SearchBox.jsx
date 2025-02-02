import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError]= useState(false);

    const API_URL= "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = import.meta.env.VITE_API_KEY;

    let gethWeatherInfo = async() =>{

        try{
            let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
       let result={
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        humidity: jsonResponse.main.humidity,
        temp_min: jsonResponse.main.temp_min,
        temp_max: jsonResponse.main.temp_max,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        windspeed: jsonResponse.wind.speed,
        latitude: jsonResponse.coord.lat,
        longitude: jsonResponse.coord.lon,
       }
       console.log(result);
       return result;
        } catch(err){
            throw err;
        }
       
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async(evt) =>{
        try{
            evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await gethWeatherInfo();
        updateInfo(newInfo);
        } catch(err){
            setError("true");
        }
        
    };


    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit" > Search </Button>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}