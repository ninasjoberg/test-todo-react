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
    const wrapper = shallow(<Header />, { disableLifecycleMethods: true }); // this prevent the ComponentDidMount to be called
    it('adds weatherIcon and weatherTemp to state', () => {
        wrapper.instance().addWeather(fakeData);
        expect(wrapper.state().weatherIconSrc).toEqual(`http://openweathermap.org/img/w/${fakeData.weather[0].icon}.png`);
        expect(wrapper.state().weatherTemp).toEqual('0°C');
    });
    it('trows error if the argument is wrong', () => {
        const tryToaddWeatherWithFaltyArg = () => {
            wrapper.instance().addWeather('weather');
        };
        expect(tryToaddWeatherWithFaltyArg).toThrowError('Something went wrong! Check the json response from the api-call');
    });
});

// it('should call methodName during componentDidMount', () => {
//     const methodNameFake = jest.spyOn(MyComponent.prototype, 'methodName');
//     const wrapper = mount(<MyComponent {...props} />);
//     expect(methodNameFake).toHaveBeenCalledTimes(1);
// });


// it('handleNameInput', () => {
//     let wrapper = shallow(<MyComponent/>);
//     wrapper.instance().searchDish = jest.fn();
//     wrapper.update();
//     wrapper.instance().handleNameInput('BoB');
//     expect(wrapper.instance().searchDish).toBeCalledWith('BoB');
//  })