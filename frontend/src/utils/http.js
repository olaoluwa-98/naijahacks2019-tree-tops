import axios from "axios";
import { removeItemFromStorage } from "./storage";
import { errorToast } from "./toast";

const HTTP = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const mergeHeaders = (...headerCollections) => {
  const result = {};
  headerCollections.map(content => {
    const { headers } = content;
    return Object.assign(result, headers);
  });

  return { headers: result };
};

export const generateBearer = token => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const generateMultipartHeader = () => {
  return { headers: { "Content-Type": `multipart/form-data` } };
};

function errorHandler(e) {
  const res = { status: 0, data: "Error, could not connect." };

  if (e.response && e.response.status === 500) {
    res.status = 500;
    res.data =
      "We ran into an error, we'll notify the development team right away";
  } else if (e.response && e.response.status === 404) {
    res.status = 404;
    res.data = "URL not found";
  } else if (e.response && e.response.status === 401) {
    errorToast("Your authorization token is invalid");
    removeItemFromStorage("token");
    window.location.replace("/");
  } else if (
    e.response &&
    (e.response.status === 400 || e.response.status === 403)
  ) {
    res.status = e.response.status;
    res.data = e.response.data;
  }
  return res;
}

export function resolveRequestError(err, showAllAlert = true) {
  const { status, data } = errorHandler(err);
  if (data.errors) {
    errorToast(Object.values(data.errors)[0]);
    throw data.errors;
  }
  if (showAllAlert === true) {
    errorToast(data.msg || data);
    throw err;
  }
  if (status === 0) {
    errorToast(data);
    throw err;
  }
}

export default HTTP;
