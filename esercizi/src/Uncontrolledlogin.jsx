export function UncontrolledForm(){
    function handleFormSubmit(event){
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        //quella dell'esercizio 47 e l'Api standard ma c'è ne sono altre che sono delle scorciatoie che però non ti garantiscono il
        // corretto funzionamento su i vari browser, tipo questa

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