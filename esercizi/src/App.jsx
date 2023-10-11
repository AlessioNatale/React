
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { MouseClicker } from "./MouseClicker";
import { MultiButton } from "./MultiButton";
import { Welcome } from "./Welcome";


export function App(){
    return(
        <div>
            <Counter/>
            <MouseClicker/>
            <MultiButton/>
            <InteractiveWelcome/>
            <Clock/>
        </div>
    )
}

