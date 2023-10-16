import { useEffect, useState } from "react";
import classes from "./Clock.module.scss"




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
        </div>
    ) 
}