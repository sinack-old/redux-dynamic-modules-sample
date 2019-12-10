import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, decrementCounter } from "./actions";

export const useCounter = () => {
  const dispatch = useDispatch();
  const counterStore = useSelector(state => state.counter);
  const increment = useCallback(() => dispatch(incrementCounter()), [dispatch]);
  const decrement = useCallback(() => dispatch(decrementCounter()), [dispatch]);

  return { counterStore, increment, decrement };
};
