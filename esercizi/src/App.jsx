import { Hello } from "./Hello";
import { Message } from "./Message";

export function App(){
    return(
        <div>
            <Hello/>
            <Message/>
        </div>
    )
}

// Puoi eseguire il rendering del componente Messaggio direttamente all'interno del componente App? Cosa succede se lo fai?
//Si è possibile e come si può vedere anche in pagina si vede sia il contenuto del componente hello e sia quello di Message