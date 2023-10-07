import { useState } from "react";

export function Counter ({value = 0}){
    const [counter, setCounter] = useState(value)

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