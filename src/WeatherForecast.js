import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coords]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if(loaded){
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index<5){
                            return(
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            )
                        } else{
                            return null;
                        }
                    })}

                </div>
            </div>
        )
    } else{
        let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
        let longitude = props.coords.lon;
        let latitude = props.coords.lat;
        let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiURL).then(handleResponse);
        return null;
    }
}