import { useState } from "react";

export function Counter ({value = 0, increment=1}){
    
    const [counter, setCounter] = useState(value)

    function handleCounterIncrement (){
        setCounter((c) => c + increment)
    }


    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}