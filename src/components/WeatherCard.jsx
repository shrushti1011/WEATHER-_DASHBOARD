import React from 'react';

function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;
  
  const getWeatherIcon = (condition) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('clear')) return '☀️';
    if (conditionLower.includes('cloud')) return '☁️';
    if (conditionLower.includes('rain')) return '🌧️';
    if (conditionLower.includes('snow')) return '❄️';
    if (conditionLower.includes('thunder')) return '⛈️';
    if (conditionLower.includes('mist') || conditionLower.includes('fog')) return '🌫️';
    return '🌤️';
  };

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="weather-info">
        <p>
          <span className="weather-icon">{getWeatherIcon(weather[0].description)}</span>
          <span className="temperature">{Math.round(main.temp)}°C</span>
        </p>
        <p className="condition">{weather[0].description}</p>
        <div className="weather-details">
          <p>💨 {Math.round(wind.speed)} m/s</p>
          <p>💧 {main.humidity}%</p>
          <p>🌡️ Feels like: {Math.round(main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
