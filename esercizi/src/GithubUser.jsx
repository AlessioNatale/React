import { useGithubUser } from "./useGithubUser"


export function GithubUser({username}){
 
    const {users, error, isLoading, onRefresh} = useGithubUser(username)

    return(
        <div>
            <button onClick={onRefresh}>Refresh</button>
            {isLoading && <h3>Loading</h3>}
            {error && <h3>An error</h3>}
            {users &&<h3>{users.name} </h3>}
            {users &&<p>{users.login} </p>}
            {users && <img width={"70px"} src={users.avatar_url}/>}
        </div>
    )
}