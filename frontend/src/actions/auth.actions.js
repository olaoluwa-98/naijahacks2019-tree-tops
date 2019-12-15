import { resolveRequestError } from "../utils/http";
import { setToken } from "../utils/auth";
import {
  registerStudentRequest,
  loginStudentRequest,
  loginUniversityRequest
} from "../services/api/auth.api";

async function registerStudent({
  firstname,
  lastname,
  email,
  password,
  university_id
}) {
  try {
    const { data } = await registerStudentRequest({
      firstname,
      lastname,
      email,
      password,
      university_id
    });
    setToken(data.token.token);
    return data;
  } catch (error) {
    resolveRequestError(error);
  }
}

async function loginStudent({ email, password }) {
  try {
    const { data } = await loginStudentRequest({ email, password });
    setToken(data.token.token);
    return data;
  } catch (error) {
    resolveRequestError(error);
  }
}

function loginUniversity({ email, password }) {}

export { registerStudent, loginStudent };
