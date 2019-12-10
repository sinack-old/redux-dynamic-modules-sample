import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postMessage } from "./actions";

export const useMessagesList = () => {
  const dispatch = useDispatch();
  const messagesStore = useSelector(state => state.messagesList);
  const addMessage = useCallback(message => dispatch(postMessage(message)), [
    dispatch,
  ]);

  return { messagesStore, addMessage };
};
