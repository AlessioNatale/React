export function UncontrolledForm(){
    function handleFormSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.target)

        const data = {
            username : formData.get("username"),
            password : formData.get("password"),
            session : formData.get("session") === "on"? true : false,
        }

        console.log(data);

        //I vantaggi sono sicuramente la sintassi più corta in quanto basta creare una cosa costante, per quanto riguarad gli svantaggi
        // dal video non ne elenca, soltato che se volessi accedere alla session ha un comportamento diverso e posso ovviare con l'operatore ternario
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