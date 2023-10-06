export function Welcome({name, age}){
    return(
        <dir>
            <p>Welcome, {name}!</p>
            {age && <p>Your age is {age}</p>}
        </dir>
    ) 
}