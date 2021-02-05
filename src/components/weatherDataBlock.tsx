import React from 'react';
import { useWeatherDataQuery } from '../../types';
import { CircularProgress } from '@material-ui/core';

type Props = {
  city: string
}

const WeatherDataBlock: React.FC<Props> = ({ city }) => {
  const { data, error, loading } = useWeatherDataQuery({
    variables: {
      name: city
    }
  });
  if (loading) {
    return<div className="loading"><CircularProgress color="secondary" /></div>;
  }

  if (error || !data || !data.getCityByName) {
    return <div className="search-error">Sorry, the specified city was not found...</div>;
  }
  return (
    <div className="weather-data">
      <div className="city-name">{data.getCityByName?.name}, {data.getCityByName?.country}</div>
      <div className="current-date">{(new Date()).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</div>
      <div className="summary">{data.getCityByName?.weather?.summary?.description}</div>
      <div className="weather-data_wrapper">
        <div className="weather-data_main">
          {Math.round(-273.15 + Number(data.getCityByName?.weather?.temperature?.actual))}&deg;
        </div>
        <div className="weather-data_rest">
            <div className="item">
              {Math.round(-273.15 + Number(data.getCityByName?.weather?.temperature?.feelsLike))}&deg;
              <span className="item_type">FEELS</span>
            </div>
            <div className="item">
              {Math.round(-273.15 + Number(data.getCityByName?.weather?.temperature?.min))}&deg;
              <span className="item_type">LOW</span>
            </div>
            <div className="item">
              {Math.round(-273.15 + Number(data.getCityByName?.weather?.temperature?.max))}&deg;
              <span className="item_type">HEIGHT</span>
            </div>
            <div className="item">
              {data.getCityByName?.weather?.wind?.speed}mph
              <span className="item_type">WIND</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherDataBlock;