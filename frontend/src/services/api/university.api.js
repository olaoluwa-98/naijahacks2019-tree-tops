import Http from "../../utils/http";

function getUniversitiesRequest() {
  return Http.get("/universities");
}

export { getUniversitiesRequest };
