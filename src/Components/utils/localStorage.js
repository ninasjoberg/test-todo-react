
export function saveItemListToLocalStorage(array, listName) {
    localStorage.setItem(listName, JSON.stringify(array));
}

export function getItemListFromLocalStorage(listName) {
    const storedToDoList = JSON.parse(localStorage.getItem(listName));
    return storedToDoList || [];
}

