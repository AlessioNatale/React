export function Age ({age}){
    return (
        <div>
           {age > 18 && age < 65 ? <p>Your age is {age}</p> : null}
        </div>
    )
}