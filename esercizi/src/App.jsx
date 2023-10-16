
import { Clock } from "./Clock";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { MouseClicker } from "./MouseClicker";
import { MultiButton } from "./MultiButton";
import { Todolist } from "./Todolist";
import { UncontrolledForm } from "./Uncontrolledlogin";
import { Welcome } from "./Welcome";


export function App(){
    return(
        <Container title={"My Awersone Application"}>
           <Welcome/>
            <Counter/>
            <Clock/>
            <MouseClicker/>
            <MultiButton/>
            <InteractiveWelcome/>
            <Login/>
            <UncontrolledForm/>
            <FocusableInput/>
            <Colors items={[
                {id:1, name:"red"},
                {id:2, name:"yellow"},
                {id:3, name:"green"},
                {id:4, name:"blue"}
            ]}/>
            <Todolist items={["pippo"]}/>
        </Container>
    )
}

