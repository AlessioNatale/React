import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser(){
    const {username = "AlessioNatale"} = useParams()

    return(
        <GithubUser username={username}/>
    )
}