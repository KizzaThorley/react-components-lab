import WeatherData from './WeatherData'
import './WeatherForecast.css'

function WeatherForecast( { day, key, img, imgAlt, time, conditions}) {



    return <WeatherData 
     day={day}
     img={img}
     imgAlt={imgAlt}
     conditions={conditions}
     time={time}
     key={key}
     />
  
    
}

export default WeatherForecast