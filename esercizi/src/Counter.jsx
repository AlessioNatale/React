import { CounterDisplay } from "./CounterDiplay";
import { useCounter } from "./CounterLogic";




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

