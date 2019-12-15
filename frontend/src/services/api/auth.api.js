import Http from "../../utils/http";

function registerStudentRequest({
  firstname,
  lastname,
  email,
  password,
  university_id
}) {
  return Http.post("/auth/student/signup", {
    firstname,
    lastname,
    email,
    password,
    university_id
  });
}

function loginStudentRequest({ email, password }) {
  return Http.post("/auth/student/login", { email, password });
}

function loginUniversityRequest({ email, password }) {
  return Http.post("/auth/university/login", { email, password });
}

export { registerStudentRequest, loginStudentRequest, loginUniversityRequest };
