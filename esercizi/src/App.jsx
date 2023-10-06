import { Welcome } from "./Welcome";


export function App(){
    const nameJonh = <strong>Jonh</strong>
    return(
        <div>
           <Welcome name={nameJonh} />
        </div>
    )
}

