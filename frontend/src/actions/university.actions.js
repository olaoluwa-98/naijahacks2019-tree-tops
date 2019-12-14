import { resolveRequestError } from "../utils/http";
import { getUniversitiesRequest } from "../services/api/university.api";

async function getUniversities() {
  try {
    const { data } = await getUniversitiesRequest();
    return data.universities.data;
  } catch (error) {
    resolveRequestError(error);
  }
  return [];
}

export { getUniversities };
