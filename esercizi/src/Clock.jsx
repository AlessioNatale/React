import { useContext, useEffect, useState } from "react";
import classes from "./Clock.module.scss"
import { LanguageContext } from "./LanguageContext";

export function LanguageClock(){
    const lingua = useContext(LanguageContext)

    return <h2>{lingua === 'en' ? 'current time' : "l'ora corrente"}</h2>

}

export function Clock() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setDate(new Date())
        },1000)

        return () =>{
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div className={classes.clock}>
            <h2>{date.toLocaleTimeString()}</h2>
            <LanguageClock/>
        </div>
    ) 
}