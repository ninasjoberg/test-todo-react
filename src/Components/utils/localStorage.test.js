import { getItemListFromLocalStorage } from './localStorage';

beforeEach(() => {
    localStorage.clear();
});

afterEach(() => {
    localStorage.clear();
});


const toDoList = [
    {
        text: 'åka pulka',
        id: 0,
    },
    {
        text: 'träna',
        id: 1,
    },
    {
        text: 'tvätta',
        id: 2,
    },
];

it('should get the itemList from localStorage', () => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    const getItemList = getItemListFromLocalStorage('toDoList');
    expect(getItemList).toEqual(toDoList);
});


it('should get empty array from localStorage', () => {
    localStorage.setItem('toDoList', JSON.stringify(''));
    const getItemList = getItemListFromLocalStorage('toDoList');
    expect(getItemList).toEqual([]);
});
