import { setSessions } from "../redux/sessions/actions";
import { getChatSessions } from "../services";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export const useChatSessions = async () => {
  const dispatch = useDispatch();
  try {
    const result = await getChatSessions();

    dispatch(setSessions(result.data.results));
  } catch (error) {
    console.log("ERROR: ", error);
    toast.error(error?.statusText || error?.message);
  }
};
