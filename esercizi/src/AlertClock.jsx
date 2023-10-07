import { Button } from "./Button"

export function AlertClock(){
    function buttonClick(){
        const now = new Date()
        alert(`l'ora corrente è ${now.toLocaleTimeString()}`)
    }

    return (
        <div>
            <p>Clicca il bottone per sapere l'ora</p>
            <Button onclick={buttonClick} label={"Click me!"}/>
        </div>
    )

}