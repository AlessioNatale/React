import { useState } from "react";
import { CounterDisplay } from "./CounterDiplay";

export function Counter ({value = 0}){
    const [counter, setCounter] = useState(value)

    function handleCounterIncrement (){
        setCounter((c) => c + 1)
    }

    return(
        <div>
            <CounterDisplay intialValue={counter} />
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}