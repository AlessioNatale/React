import { Welcome } from "./Welcome";


export function App(){
    const nameJonh = <strong>Jonh</strong>
    return(
        <div>
           <Welcome name={nameJonh} age={34}/>
        </div>
    )
}
// Cosa succede se l' nameoggetto di scena è un'espressione JSX anziché una stringa?
// Come si passa un oggetto di scena che contiene un'espressione JSX?

//se si vuole passare un espressione JSX bisogna creare una costante con all'interno l'espressione
//JSX e poi passarla a name come qualsiasi altro dato quindi dentrole parentesi graffe
