export function Container({title, children}){
    return (
        <div className="app">
            <div className="app-title">{title}</div>
            <div className="app-children">{children}</div>
        </div>
    )
}