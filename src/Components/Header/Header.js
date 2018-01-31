import React, { Component } from 'react';
import getWeatherInfoByCity from '../utils/weatherApiCall';
import './header.css';


class Header extends Component {
    state = {
        location: 'Stockholm',
        weatherIconSrc: '',
        weatherTemp: '',
        error: '',
    }

    componentDidMount() {
        getWeatherInfoByCity(this.state.location).then(this.addWeather);
    }

    addWeather = (json) => {
        const { weather = [], main: { temp } = {}, error } = json;

        if (error) {
            this.setState({ error });
            return;
        }

        if (!weather[0] || !weather[0].icon || typeof temp !== 'number') {
            this.setState({ error: 'Something went wrong! Check the json response from the api-call' });
            return;
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
                    {this.state.error &&
                        <h4 className="weather-error-mess">Error: {this.state.error}</h4>
                    }
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
