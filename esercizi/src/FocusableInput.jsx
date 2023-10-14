import { useEffect, useRef } from "react"

export function FocusableInput(){
    const mountedRef = useRef(false)

    const inputRef = useRef(null)

    

    useEffect(() =>{
        if(!mountedRef.current){
            mountedRef.current = true
            console.log("montato per la prima volta")
        }// else{
        //      console.log("secondo montaggio");
        // }
        //cosi vedremo anche quando vieni montato nuovamente

        inputRef.current?.focus()
    }, [])

    return <input ref={inputRef} />
}