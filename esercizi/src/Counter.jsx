import { useState } from "react";

export function Counter (){
    const [counter, setCounter] = useState(0)

    function handleCounterIncrement (){
        setCounter((c) => c + 1)
    }

    //Quando si chiama la funzione "setter" per incrementare il contatore, il parametro deve essere una funzione o un valore immediato? Perché?

    //deve essere una funzione e non un vaolre immediato perchè ci poddono essere aggiornamenti asincroni e in più perchè cosi riusciamo 
    //a tenere traccia dell'aggiornamneto precedente, così da garantire che gli aggiornamenti siano fatti sullo stato precedente

    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}