import { resolveRequestError } from "../utils/http";
import { setToken } from "../utils/auth";
import {
  registerStudentRequest,
  loginStudentRequest,
  loginUniversityRequest
} from "../services/api/auth.api";

async function registerStudent({ firstname, lastname, email, password }) {
  try {
    const { data } = await registerStudentRequest({
      firstname,
      lastname,
      email,
      password
    });
    setToken(data.token);
    return data;
  } catch (error) {
    resolveRequestError(error);
  }
}

async function loginStudent({ email, password }) {
  try {
    const { data } = await loginStudentRequest({ email, password });
    setToken(data.token);
    return data;
  } catch (error) {
    resolveRequestError(error);
  }
}

function loginUniversity({ email, password }) {}

export { registerStudent, loginStudent };
