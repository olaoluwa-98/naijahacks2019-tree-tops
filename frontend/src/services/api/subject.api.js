import Http, { generateBearer } from "../../utils/http";
import { getToken } from "../../utils/auth";

function getSubjectsRequest(courseId) {
  return Http.get(`/courses/${courseId}/subjects`, generateBearer(getToken()));
}

function getSingleSubjectRequest(courseId, subjectId) {
  return Http.get(
    `/courses/${courseId}/subjects/${subjectId}`,
    generateBearer(getToken())
  );
}

function createBulkSubjectsRequest(courseId, subjects) {
  return Http.post(
    `/courses/${courseId}/subjects/bulk`,
    { subjects },
    generateBearer(getToken())
  );
}

function updateSubjectRequest(payload) {
  return Http.put(
    `/courses/${courseId}/subjects/${subjectId}`,
    payload,
    generateBearer(getToken())
  );
}

function deleteSubjectRequest(courseId, subjectId) {
  return Http.delete(
    `/courses/${courseId}/subjects/${subjectId}`,
    generateBearer(getToken())
  );
}

export {
  getSubjectsRequest,
  getSingleSubjectRequest,
  createBulkSubjectsRequest,
  updateSubjectRequest,
  deleteSubjectRequest
};
