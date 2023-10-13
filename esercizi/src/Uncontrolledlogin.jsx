export function UncontrolledForm(){
    function handleFormSubmit(event){
        event.preventDefault()

        const username = event.target.elements.namedItem("username").value
        const password = event.target.elements.namedItem("password").value

        const data = {
            username,
            password
        }

        console.log(data);
    }


    return(
        <form onSubmit={handleFormSubmit}>
          <h1>My Uncontroller Form</h1>
          <input name="username" />
          <input name="password" type="password"/>
          <input name="session" type="checkbox" />
          <button>Login</button> 
          <button type="reset">Reset</button>
        </form>
    )
}