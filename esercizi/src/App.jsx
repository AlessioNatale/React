import { Welcome } from "./Welcome";


export function App(){
    return(
        <div>
           <Welcome/>
        </div>
    )
}

// Cosa succede se nameal Welcomecomponente non viene passata alcuna prop?
// Puoi impostare un valore predefinito per l' nameoggetto di scena?

//Se non passo alcuna props vedrei soltanto Hello, quindi visto che devo passare un valore predefinito
//nel componente Welcome ne ho messo uno fisso, per fare questo forse era più utile fare con l'operatore ternario
//però ho visto che non ci siamo ancora arrivati quindi non l'ho usato

