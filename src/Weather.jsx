import React, { useEffect, useState } from "react";
import axios from "axios";

function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [inputData, setInputDate] = useState("");
  const [buttonClick, setButtonClick] = useState("patna");

  const handleClick = () => {
    setButtonClick(inputData);
  };
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=0fea8be6e68d4836a9890623222106&q=${buttonClick}`
      )
      .then((res) => {
        setWeatherData(res.data);
      });
  }, [buttonClick]);

  const [temprature, setTemprature] = useState("");
  const [placeName, setPlacename] = useState("");
  const [country, setCountry] = useState("");

  const changeTemp = () => {
    const { current, location } = weatherData;
    const { name, country } = location;
    const { temp_c } = current;
    setTemprature(temp_c);
    setCountry(country);
    setPlacename(name);
  };
  setTimeout(changeTemp, 100);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const data = day + "-" + month + "-" + year;
  // console.log(weatherData);
  return (
    <>
    <div>
      <input className="form"
        type="text"
        value={inputData}
        onChange={(e) => setInputDate(e.target.value)}
      />
      <button onClick={handleClick}>click me</button>
      </div>
      <h3 className="place"style={{color:'white'}} >
        {placeName},{country}
      </h3>
      <h4 className="date" style={{color:'white'}} >{data}</h4>
      <h1 className="temp" style={{color:'white'}} >{temprature} Degree </h1>
    </>
  );
}

export default Weather;
