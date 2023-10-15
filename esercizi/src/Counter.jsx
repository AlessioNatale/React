import { useEffect, useState, useRef } from "react";
import { CounterDisplay } from "./CounterDiplay";

export function Counter({ value = 0 }) {
  const [counter, setCounter] = useState(value);
  const directionRef = useRef(null); 

  useEffect(() => {
    console.log(`Il valore corrente del contatore è ${counter}`);
    
    if (counter >= value) {
      directionRef.current = "down";
    } else if (counter <= value) {
      directionRef.current = "up";
    }
  }, [counter, value]);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }
  function handelCounterDecrement() {
    setCounter((c) => c - 1);
  }

  function handleCounterReset() {
    setCounter(0);
  }

  useEffect(() => {
    if (directionRef.current !== null) {
      console.log(`Direction: ${directionRef.current}`);
    }
  }, [directionRef.current]);

  return (
    <div>
      <CounterDisplay intialValue={counter} />
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handelCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
