import { useState } from "react";
import { CounterDisplay } from "./CounterDiplay";

export function Counter ({value = 0}){
    const [counter, setCounter] = useState(value)

    function handleCounterIncrement (){
        setCounter((c) => c + 1)
    }
     function handelCounterDecrement (){
        setCounter((c) => c - 1)
     }

     function handleCounterReset(){
        setCounter(0)
     }

    return(
        <div>
            <CounterDisplay intialValue={counter} />
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handelCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}