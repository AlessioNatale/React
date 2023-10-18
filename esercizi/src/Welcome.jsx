import { Age } from "./Age";

export function Welcome({name}){
    return(
        <dir>
            <p>Welcome, {name}!</p>
            {name === "Jonh" ? <Age age={36}/> : null}
        </dir>
    ) 
}