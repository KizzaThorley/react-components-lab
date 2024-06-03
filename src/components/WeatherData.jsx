import WeatherIcon from "./WeatherIcon"

function WeatherData({ img, imgAlt, key, day, time, conditions}) {



    return <div className="weather" key={key}>
      <h2>{day}</h2>
    <WeatherIcon 
    img={img}
    imgAlt={imgAlt} 
    />
      <p><span>conditions: </span>{conditions} </p>
      <p><span>time: </span>{time}</p>
    </div>
  
}

export default WeatherData