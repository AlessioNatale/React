
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { MouseClicker } from "./MouseClicker";
import { MultiButton } from "./MultiButton";
import { Welcome } from "./Welcome";


export function App(){
    return(
        <div>
           <Welcome name="Jonh" age={15}/>
            <Counter/>
            <Clock/>
            <MouseClicker/>
            <MultiButton/>
        </div>
    )
}

