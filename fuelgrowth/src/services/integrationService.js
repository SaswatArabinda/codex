import { API_ROUTES } from "../constants/routes";
import http from "../utils/http-client";

const { INTEGRATION } = API_ROUTES;

export const getIntegrationList = () => {
  return http.get(INTEGRATION);
};

export const authorizeIntegration = (authURL, data) => {
  return http.post(authURL, data);
};

const methods = {
  getIntegrationList,
  authorizeIntegration,
};

export default methods;
