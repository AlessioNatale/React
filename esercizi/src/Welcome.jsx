import { Age } from "./Age";

export function Welcome({name, age}){
    return(
        <div>
            <p>Welcome, {name}!</p>
            <Age age={34}/>
        </div>
    ) 
}