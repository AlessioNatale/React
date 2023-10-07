import { AlertClock } from "./AlertClock";
import { Welcome } from "./Welcome";


export function App(){
    return(
        <div>
           <Welcome name="Jonh" age={15}/>
           <AlertClock/>
        </div>
    )
}

