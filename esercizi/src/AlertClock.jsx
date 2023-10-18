import { Button } from "./Button"

export function AlertClock({current}){
    

    return (
        <div>
            <p>Clicca il bottone per sapere l'ora</p>
            <Button onclick={current} label={"Click me!"}/>
        </div>
    )

}