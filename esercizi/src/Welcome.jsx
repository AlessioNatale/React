export function Welcome({name, age}){
    return(
        <div className="welcome"> 
            <p>Welcome, {name}!</p>
            { age > 18 ? <p>Your age is {age}</p> : <p>You are very young</p> }
        </div>
    ) 
}