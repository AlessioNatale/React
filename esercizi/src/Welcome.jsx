export function Welcome({name, age}){
    return(
        <dir>
            <p>Welcome, {name}!</p>
            {age > 18 && age < 65 ? <p>Your age is {age}</p> : null}
        </dir>
    ) 
}