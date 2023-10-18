import { Age } from "./Age";

export function Welcome({name}){
    return(
        <dir>
            <p>Welcome, {name}!</p>
            <Age age={34}/>
        </dir>
    ) 
}