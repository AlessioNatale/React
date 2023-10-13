
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { MouseClicker } from "./MouseClicker";
import { MultiButton } from "./MultiButton";
import { UncontrolledForm } from "./Uncontrolledlogin";
import { Welcome } from "./Welcome";


export function App(){
    return(
        <div>
           <Welcome/>
            <Counter/>
            <Clock/>
            <MouseClicker/>
            <MultiButton/>
            <InteractiveWelcome/>
            <Login/>
            <UncontrolledForm/>
            <FocusableInput/>
        </div>
    )
}

