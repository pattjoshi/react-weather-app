import React, { useState } from "react";

import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

import styled from "styled-components";
import Axios from "axios";

// const API_KEY = " 87a993043f82e640348a28e2d004f4d9;";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

const App = () => {
  const [city, updateCity] = useState();
  const [wether, updatewether] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
    );
    updatewether(response.data);
  };

  return (
    <Container>
      <AppLabel>React wether Website</AppLabel>
      {city && wether ? (
        <WeatherComponent wether={wether} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
};

export default App;

// useState is a Hook that lets you add React state to function components.
