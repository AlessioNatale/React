import { Age } from "./Age";

export function Welcome({name, age}){
    return(
        <dir>
            <p>Welcome, {name}!</p>
            {age > 18 && age < 65 &&<Age age={age}/>}
        </dir>
    ) 
}