function Color({items}){
    return(
        <li>{items.name}</li>
    )
}

export function Colors({items}){
    return (
        <ul>
            {items.map((items) =>(
              <Color key={items.id} items={items} /> 
            ))}
        </ul>
    )
}