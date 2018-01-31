import getWeatherInfoByCity from '../utils/weatherApiCall';

require('isomorphic-fetch');
const fetchMock = require('fetch-mock');


describe('weatherApiCall() using Promises', () => {
    it('should load weather data', () => {
        const fakeResponse = { temp: 0, icon: 'sun' };
        fetchMock.get('*', fakeResponse);
        return getWeatherInfoByCity('stockholm')
            .then((returnData) => {
                return expect(returnData).toEqual(fakeResponse);
            });
    });
});

fetchMock.restore();


// it('trows error if no deleteItem', () => {
//     const tryToDeleteWithFaltyArg = () => {
//         wrapper.instance().deleteToDo('plugga');
//     };
//     expect(tryToDeleteWithFaltyArg).toThrowError('`We could not find a city called `');
// });
