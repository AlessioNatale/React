import { useEffect, useState } from "react";

export function GithubUser({username}){
 
    const [data, setData] = useState()
    const [error, setError] = useState()

    async function fetchGithub(){

        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
    
            setData(json)
            console.log(json);
            
        } catch (error) {
            setError(error)
            setData(null)
        }
    }
    
    useEffect(()=>{
        fetchGithub(username)
    },[username])

    return(
        <div>
            {data &&<h3>{data.name} </h3>}
            {data &&<p>{data.login} </p>}
            {data && <img width={"70px"} src={data.avatar_url}/>}
        </div>
    )
}