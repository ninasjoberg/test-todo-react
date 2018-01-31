import getWeatherInfoByCity, { checkResponse } from '../utils/weatherApiCall';

require('isomorphic-fetch');
const fetchMock = require('fetch-mock');


beforeEach(() => {
    fetchMock.restore();
});


describe('getWeatherInfoByCity using Promises', () => {
    it('should load weather data', () => {
        expect.assertions(1);
        const fakeResponse = { temp: 0, icon: 'sun' };
        fetchMock.get('*', fakeResponse);
        return getWeatherInfoByCity('stockholm')
            .then((returnData) => {
                return expect(returnData).toEqual(fakeResponse);
            });
    });
    it('throws an error if the status is 404', () => {
        const willThrow = () => {
            checkResponse('ööö')({ cod: '404' });
        };
        expect(willThrow).toThrowError('We could not find a city called ööö');
    });
});
