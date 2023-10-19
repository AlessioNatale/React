import { useEffect, useState } from "react";

export function useGithubUser(username){
    
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()

    async function fetchGithub(){

        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
    
            setData(json)
            console.log(json);
            
        } catch (error) {
            setError(error)
            setData(null)
        } finally{
            setLoading(false)
        }
    }
    
    useEffect(()=>{
        fetchGithub()
    },[username])

    return {data, error, loading}

}