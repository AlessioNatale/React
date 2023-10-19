import { useGithubUser } from "./useGithubUser";



export function GithubUser({username}){
    const {data, error, loading} = useGithubUser(username)
 
    return(
        <div>
            {loading && <h3>Loading...</h3>}
            {error && <h3>There has been an error</h3>}
            {data &&<h3>{data.name} </h3>}
            {data &&<p>{data.login} </p>}
            {data && <img width={"70px"} src={data.avatar_url}/>}
        </div>
    )
}