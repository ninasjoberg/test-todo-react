
export function saveItemListToLocalStorage(array, listName) {
    localStorage.setItem(listName, JSON.stringify(array));
}

export function getItemListFromLocalStorage(listName) {
    const storedToDoList = JSON.parse(localStorage.getItem(listName));
    return storedToDoList || [];
}

export function saveCounterToLocalStorage(countNo) {
    localStorage.setItem('Counter', countNo);
}

export function getCounterFromLocalStorage(listName) {
    const storedCounter = parseInt(localStorage.getItem(listName));
    return storedCounter || 0;
}

