import { setSessions } from "../redux/sessionLists/actions";
import { getChatSessions } from "../services";
import { SessionRow } from "./SessionRow";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../utils/errors";
import { PageLoader } from "./Loader";

export const PreviousSessions = () => {
  const dispatch = useDispatch();
  const sessionsState = useSelector((state) => state.sessionLists);

  const { sessionLists: sessions } = sessionsState;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const result = await getChatSessions();
        dispatch(setSessions(result.data.results));
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    })();
  }, [setLoading]);

  if (isLoading) {
    return <PageLoader />;
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
