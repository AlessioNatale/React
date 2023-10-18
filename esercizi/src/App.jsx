import { AlertClock } from "./AlertClock";
import { Welcome } from "./Welcome";


export function App(){
    function buttonClick(){
        const now = new Date()
        alert(`l'ora corrente è ${now.toLocaleTimeString()}`)
    }
    return(
        <div>
           <Welcome name="Jonh" age={15}/>
           <AlertClock current={buttonClick}/>
        </div>
    )
}

