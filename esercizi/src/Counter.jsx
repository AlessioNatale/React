import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDiplay";


function useCounter (initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement (){
        setCounter((c) => c + 1)
    }
     function handelCounterDecrement (){
        setCounter((c) => c - 1)
     }

     function handleCounterReset(){
        setCounter(0)
     }

     return{
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handelCounterDecrement,
        onReset: handleCounterReset
     }
}

export function Counter ({value = 0}){
    const [counter, setCounter] = useState(value)

    

    useEffect(() => {
        console.log(`Il valore corrente del contatore è ${counter}`);
    },[counter])

    function handleCounterIncrement (){
        setCounter((c) => c + 1)
    }
     function handelCounterDecrement (){
        setCounter((c) => c - 1)
     }

     function handleCounterReset(){
        setCounter(0)
     }

    const CounterStyle = {
        backgroundColor: "yellow",
    } 

    return(
        <div style={CounterStyle}>
            <CounterDisplay intialValue={counter} />
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handelCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}