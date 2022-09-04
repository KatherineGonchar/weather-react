import React from "react";

export default function FormattedDate(props){
    console.log(props);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    return <span>{day} {hours}:{minutes}</span>;
}