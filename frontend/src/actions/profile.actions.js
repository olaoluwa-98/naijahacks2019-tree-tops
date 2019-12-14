import { resolveRequestError } from "../utils/http";
import {
  getStudentProfileRequest,
  updateStudentProfileRequest,
  getUniversityProfileRequest,
  updateUniversityProfileRequest
} from "../services/api/profile.api";

async function getStudentProfile() {
  try {
    const { data } = await getStudentProfileRequest();
    return data;
  } catch (error) {
    resolveRequestError(error);
  }
}

async function updateStudentProfile(payload) {
  try {
    const { data } = await updateStudentProfileRequest(payload);
    return data;
  } catch (error) {
    resolveRequestError(error);
  }
}

async function getUniversityProfile() {
  try {
    const { data } = await getUniversityProfileRequest();
    return data;
  } catch (error) {
    resolveRequestError(error);
  }
  return null;
}

async function updateUniversityProfile(payload) {
  try {
    const { data } = await updateUniversityProfileRequest(payload);
    return data;
  } catch (error) {
    resolveRequestError(error);
  }
}

export {
  getStudentProfile,
  getUniversityProfile,
  updateStudentProfile,
  updateUniversityProfile
};
