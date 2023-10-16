import { useState } from "react"

export function Container({title, children}){
    const [collapsed, setCollapsed] = useState(false) 

    function handleCollapsed(){
        setCollapsed((t) => !t)
    }


    return (
        <div className="app">
            <div className="app-title">
                {title} <button onClick={handleCollapsed}>Toggle</button>
            </div>
            {!collapsed && <div className="app-children">{children}</div>}
        </div>
    )
}