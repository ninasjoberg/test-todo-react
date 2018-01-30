import React, { Component } from 'react';
import getWeatherInfoByCity from '../utils/weatherApiCall';
import './header.css';


class Header extends Component {
    state = {
        location: 'Stockholm',
        weatherIconSrc: '',
        weatherTemp: '',
    }


    componentDidMount() {
        getWeatherInfoByCity('stockholm').then((json) => {
            this.addWeather(json);
        });
    }

    addWeather = (json) => {
        const { weather = [], main: { temp } = {} } = json;
        if (!weather[0] || !weather[0].icon || typeof temp !== 'number') {
            throw Error('Something went wrong! Check the json response from the api-call');
        }
        const weatherIconSrc = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
        this.setState({ weatherIconSrc });

        const weatherTemp = `${temp}°C`;
        this.setState({ weatherTemp });
    }

    render() {
        return (
            <header className="header">
                <div className="weather-div">
                    <p className="weather-p">Have things to-do outside?</p>
                    <p className="weather-p">Todays weather: {this.state.location}</p>
                    <p className="weather-p">{this.state.weatherTemp}</p>
                    <img src={this.state.weatherIconSrc} alt="weather-icon" />
                </div>
                <h1 className="header-title">ToDo TestApp</h1>

            </header>
        );
    }
}

export default Header;
