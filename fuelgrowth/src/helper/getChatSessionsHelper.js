import { getChatSessions } from "../services";
import { setError } from "../utils/errors";

export const getChatSessionsHelper = async () => {
  try {
    const result = await getChatSessions();
    return result.data.results;
  } catch (error) {
    setError(error);
  }
  return null;
};
