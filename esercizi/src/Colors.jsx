export function Colors({items}){
    return (
        <ul>
            {items.map((name, index) =>(
                <li key={index}>{name}</li>
            ))}
        </ul>
    )
}