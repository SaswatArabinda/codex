import { getIntegrationList as fetchList } from "../services/integrationService";

export const getIntegrationListsHelper = async () => {
  try {
    const result = await fetchList();
    return result.data.results;
  } catch (error) {
    setError(error);
  }
  return null;
};
