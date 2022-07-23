import React from "react";
import { useCounter } from "../../hooks/useCounter";

function CounterApp() {
  const [counter, increment, reset] = useCounter(2);

  return (
    <div>
      <h2>Clicks: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApp;
