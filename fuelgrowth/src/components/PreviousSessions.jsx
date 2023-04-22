import { removeSession, setSessions } from "../redux/sessions/actions";
import authService from "../services/auth.service";
import { SessionRow } from "./SessionRow";
import React, { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useNavigate, useParams } from "react-router-dom";

export const PreviousSessions = () => {
  const dispatch = useDispatch();
  const sessionsState = useSelector((state) => state.sessions);
  const { sessions } = sessionsState;
  // TODO: This is wrong way of refreshing the side bar
  const { sessionId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const result = await authService.getChatSessions();

        dispatch(setSessions(result.data.results));
      } catch (error) {
        console.log("ERROR: ", error);
        toast.error(error.statusText || error.message);
      }
    })();
  }, [sessionId]);

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
