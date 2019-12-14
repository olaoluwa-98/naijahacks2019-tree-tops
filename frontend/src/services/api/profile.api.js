import Http, { generateBearer } from "../../utils/http";
import { getToken } from "../../utils/auth";

function getStudentProfileRequest() {
  return Http.get(`/profile`, generateBearer(getToken()));
}

function updateStudentProfileRequest(payload) {
  return Http.put(`/profile`, payload, generateBearer(getToken()));
}

function getUniversityProfileRequest() {
  return Http.get(`/u/profile`, generateBearer(getToken()));
}

function updateUniversityProfileRequest(payload) {
  return Http.put(`/u/profile`, payload, generateBearer(getToken()));
}

export {
  getStudentProfileRequest,
  updateStudentProfileRequest,
  getUniversityProfileRequest,
  updateUniversityProfileRequest
};
