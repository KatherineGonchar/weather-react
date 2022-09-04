import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showF(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showC(event){
        event.preventDefault();
        setUnit("celsius");
    }
    function fahrenheit(){
        return (props.celsius * 9) / 5 + 32;
    }
    if(unit === "celsius"){
        return (
            <span>
            Temperature: {Math.round(props.celsius)} °C | <a href="/" onClick={showF}>°F</a>
        </span>
        );
    } else{
        return (
            <span>
            Temperature: {Math.round(fahrenheit())} <a href="/" onClick={showC}>°C</a>
            | °F
        </span>
        );
    }

}