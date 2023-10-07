import { useState } from "react";

export function Counter (){
    const [counter, setCounter] = useState(0)

    function handleCounterIncrement (){
        setCounter((c) => c + 1)
    }

    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}