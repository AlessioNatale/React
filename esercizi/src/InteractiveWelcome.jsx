import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome(){
    const [data, setData] = useState()

    function handleInputChange(event){
        const value = event.target.value 

        setData(value)
    }

    return (
        <div>
            <input value={data} onChange={handleInputChange} />
            <Welcome name={data}/>
        </div>
    )
}