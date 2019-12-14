import {
  getItemFromStorage,
  storeItemInStorage,
  removeItemFromStorage
} from "./storage";

const TOKEN_KEY = "token";

function getToken() {
  return getItemFromStorage(TOKEN_KEY);
}

function removeToken() {
  return removeItemFromStorage(TOKEN_KEY);
}

function setToken(token) {
  return storeItemInStorage(TOKEN_KEY, token);
}

function isLoggedin() {
  const token = getToken();
  return token ? true : false;
}

function verifyAuthentication() {
  const isAuthenticated = isLoggedin();
  if (!isAuthenticated) {
    window.location.replace("/login");
  }
}

export { getToken, removeToken, setToken, isLoggedin, verifyAuthentication };
