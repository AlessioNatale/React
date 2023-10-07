
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";


export function App(){
    return(
        <div>
           <Welcome name="Jonh" age={15}/>
            <Counter/>
        </div>
    )
}

