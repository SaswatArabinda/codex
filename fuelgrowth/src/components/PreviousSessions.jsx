import { setSessions } from "../redux/sessionLists/actions";
import { SessionRow } from "./SessionRow";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../utils/errors";
import { PageLoader } from "./Loader";
import { getChatSessionsHelper } from "../helper/getChatSessionsHelper";

export const PreviousSessions = () => {
  const dispatch = useDispatch();
  const sessionsState = useSelector((state) => state.sessionLists);

  const { sessionLists: sessions } = sessionsState;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        // Fetch the session list
        const result = await getChatSessionsHelper();
        dispatch(setSessions(result));
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
