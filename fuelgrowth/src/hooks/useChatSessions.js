import { setSessions } from "../redux/sessionLists/actions";
import { getChatSessions } from "../services";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setError } from "../utils/errors";

export const useChatSessions = async () => {
  const dispatch = useDispatch();
  try {
    const result = await getChatSessions();

    dispatch(setSessions(result.data.results));
  } catch (error) {
    setError(error);
  }
};
