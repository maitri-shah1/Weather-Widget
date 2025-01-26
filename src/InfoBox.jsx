import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL="https://images.unsplash.com/photo-1733164845602-68d7347909e0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let COLD_URL="https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let HOT_URL="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL="https://media.istockphoto.com/id/1321878632/photo/cloudy-sky-over-beautiful-flood-plain-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=IEX0DCeEeWnkakFc1jQxI0oujXoMcU-AD38SP3g08R0=";

    return(
        <div className="InfoBox">
           <h3>Weather Information:</h3> 
           <div className="cardContainer">
           <Card sx={{ maxWidth: 600, margin: "0 auto" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <strong> {info.city} </strong> &nbsp;{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" color= "text.secondary" component={"span"}>
          <div><strong>Temprature: </strong> {info.temp}&deg;C </div>
          <div><strong>Humidity: </strong> {info.humidity} </div>
          <div><strong>Minimum Temprature: </strong> {info.temp_min} </div>
          <div><strong>Maximum Temprature: </strong>{info.temp_max} </div>
          <div><strong>Feels Like: </strong>{info.feelsLike}&deg;C </div>
          <div><strong>Weather: </strong> {info.weather} </div>
          <div> <strong>Latitude: </strong>{info.latitude} </div>
          <div><strong>Longitude: </strong> {info.longitude} </div>
          <div><strong>Wind Speed: </strong> {info.windspeed}km/h </div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}