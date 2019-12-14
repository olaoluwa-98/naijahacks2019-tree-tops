function storeItemInStorage(key, value) {
  localStorage.setItem(key, value);
  return value;
}

function getItemFromStorage(key) {
  const value = localStorage.getItem(key);
  return value;
}

function removeItemFromStorage(key) {
  const value = localStorage.removeItem(key);
  return value;
}

export { storeItemInStorage, getItemFromStorage, removeItemFromStorage };
