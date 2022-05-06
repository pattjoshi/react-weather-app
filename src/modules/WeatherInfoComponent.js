import React from "react";
import styled from "styled-components";

export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};

const WetherCondition = styled.div`
  display: flex;
  flix-diraction: row;
  align-items: center;
  width: 100%;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WelcomeWeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const Location = styled.span`
  forn-size: 28px;
  forn-weight: bold;
`;

const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherComponent = (props) => {
  const { wether } = props;
  const isDay = wether?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <WetherCondition>
        <WelcomeWeatherLogo src={"/icons/perfect-day.svg"} />

        <Condition>
          <span>{`${Math.floor(wether?.main?.temp - 273)}°C`}</span>
          {`  |  ${wether?.weather[0].description}`}
        </Condition>
      </WetherCondition>
      <Location> {`${wether?.name}, ${wether?.sys?.country}`} </Location>
      <WeatherInfoLabel> Weather Info </WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={`${getTime(wether?.sys[isDay ? "sunset" : "sunrise"])}`}
        />
        <WeatherInfoComponent
          name={"humidity"}
          value={wether?.main?.humidity}
        />
        <WeatherInfoComponent name={"wind"} value={wether?.wind?.speed} />
        <WeatherInfoComponent
          name={"pressure"}
          value={wether?.main?.pressure}
        />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherComponent;

// I creact the is web site from scratch .
// I learn these :-
// 1. Heard code all componet
// 2. fatch API
// 3. add API data in respactive space
