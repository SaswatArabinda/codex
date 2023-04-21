import React, { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import authService from "../services/auth.service";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeSession, setSessions } from "../redux/sessions/actions";
import { SessionRow } from "./SessionRow";

export const PreviousSessions = () => {
  const dispatch = useDispatch();
  const sessionsState = useSelector((state) => state.sessions);
  const { sessions } = sessionsState;

  useEffect(() => {
    (async () => {
      try {
        const result = await authService.getChatSessions();

        dispatch(setSessions(result.data.results));
      } catch (error) {
        console.log("ERROR: ", error);
        toast.error(error.data.message);
      }
    })();
  }, []);

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
