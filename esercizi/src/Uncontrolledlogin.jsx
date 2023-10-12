export function UncontrolledForm(){
    return(
        <form>
          <h1>My Uncontroller Form</h1>
          <input name="username" />
          <input name="password" type="password"/>
          <input name="session" type="checkbox" />
          <button>Login</button> 
          <button type="reset">Reset</button>
        </form>
    )
}