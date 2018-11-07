import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const kelvinConstant = 273.15;
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const temps = cityData.list.map(weather =>
      Math.round(weather.main.temp - kelvinConstant)
    );
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={cityName}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart data={temps} color="red" units="°C" /></td>
        <td><Chart data={pressures} color="blue" units="hPa" /></td>
        <td><Chart data={humidities} color="green" units="%" /></td>
      </tr>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
