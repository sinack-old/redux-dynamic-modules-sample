import React from "react";
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { useCounter } from "./useCounter";
import counterModule from "./module";

const Counter = () => {
  const { counterStore, increment, decrement } = useCounter();

  return (
    <div>
      <div>カウンター：{counterStore}</div>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => decrement()}>-1</button>
    </div>
  );
};

export default () => (
  <DynamicModuleLoader modules={[counterModule()]}>
    <Counter />
  </DynamicModuleLoader>
);
