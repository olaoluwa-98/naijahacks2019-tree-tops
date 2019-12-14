import Http, { generateBearer } from "../utils/http";
import { getToken } from "../utils/auth";

function getCoursesRequest(universityId) {
  return Http.get(
    `/universities/${universityId}/courses`,
    generateBearer(getToken())
  );
}

function getSingleCourseRequest(universityId, courseId) {
  return Http.get(
    `/universities/${universityId}/courses/${courseId}`,
    generateBearer(getToken())
  );
}

function createCourseRequest({ name }) {
  return Http.delete(`/courses`, { name }, generateBearer(getToken()));
}

function updateCourseRequest({ courseId, payload }) {
  return Http.put(`/courses/${courseId}`, payload, generateBearer(getToken()));
}

function deleteCourseRequest(courseId) {
  return Http.delete(`/courses/${courseId}`, generateBearer(getToken()));
}

export {
  getCoursesRequest,
  getSingleCourseRequest,
  createCourseRequest,
  updateCourseRequest,
  deleteCourseRequest
};
