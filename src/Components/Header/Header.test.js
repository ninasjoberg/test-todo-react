import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';


const fakeData = {
    weather: [{
        icon: '03n',
    }],
    main: {
        temp: 0,
    },
};

describe('test the internal method addWeather', () => {
    const wrapper = shallow(<Header />, { disableLifecycleMethods: true }); // this prevent the ComponentDidMount to be called,
    it('adds weatherIcon and weatherTemp to state', () => {
        wrapper.instance().addWeather(fakeData);
        expect(wrapper.state().weatherIconSrc).toEqual(`http://openweathermap.org/img/w/${fakeData.weather[0].icon}.png`);
        expect(wrapper.state().weatherTemp).toEqual('0°C');
    });
    it('error is set to state if addWeather gets an error as json arg', () => {
        const fakeJsonErr = {
            error: 'We could not find a city called ööö',
        };
        wrapper.instance().addWeather(fakeJsonErr);
        expect(wrapper.state().error).toEqual('We could not find a city called ööö');
    });
    it('error is set to state if we dont get expected json response', () => {
        wrapper.instance().addWeather('');
        expect(wrapper.state().error).toEqual('Something went wrong! Check the json response from the api-call');
    });
    it('shows error message if error in state is set', () => {
        wrapper.setState({ error: 'error' });
        expect(wrapper.find('.weather-error-mess').exists()).toBeTruthy();
    });
});
