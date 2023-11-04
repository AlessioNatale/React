import { Age } from "./Age";

export function Welcome({name, age}){
    return(
        <dir>
            <p>Welcome, {name}!</p>
            {age && <Age age={age}/>}
        </dir>
    ) 
}