export function Colors({items}){
    return (
        <ul>
            {items.map((items) =>(
                <li key={items.id}>{items.name}</li>
            ))}
        </ul>
    )
}