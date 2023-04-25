import { setSessions } from "../redux/sessionLists/actions";
import { getChatSessions } from "../services";
import { SessionRow } from "./SessionRow";
import React, { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "flowbite-react";

export const PreviousSessions = () => {
  const dispatch = useDispatch();
  const sessionsState = useSelector((state) => state.sessionLists);

  const { sessionLists: sessions } = sessionsState;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const result = await getChatSessions();

        dispatch(setSessions(result.data.results));
      } catch (error) {
        console.log("ERROR: ", error);
        toast.error(error?.statusText || error?.message);
      }
      setLoading(false);
    })();
  }, [setLoading]);

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  return (
    <>
      {Array.isArray(sessions) &&
        sessions.map((session) => {
          const { chat_session_id, created } = session;
          return (
            <SessionRow key={`${chat_session_id}${created}`} {...session} />
          );
        })}
    </>
  );
};
