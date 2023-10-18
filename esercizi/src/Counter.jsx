import { useState } from "react";
import { CounterDisplay } from "./CounterDiplay";


function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }

  function handleCounterReset() {
    setCounter(0);
  }

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
}

export function Counter({initialValue = 0}) {
  const { counter, onIncrement, onDecrement, onReset } = useCounter(initialValue);

  const counterStyle = {
    backgroundColor: "yellow",
  };

  return (
    <div style={counterStyle}>
      <CounterDisplay valueDisplay={counter}/>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

