import { useEffect, useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers(){
    const [data, setData] = useState([])
    const [selectedUser, setSelectedUser] = useState(null);

    async function fetchUser(){
        const response = await fetch("https://api.github.com/users")
        const json = await response.json()

        setData(json)
        console.log(json);
    }

    useEffect(() => {
        fetchUser()
    },[])

    return (
        <div>
            <ul>
                {data.slice(0, 10).map((user) =>(
                    <li key={user.login}>
                        <button onClick={() => setSelectedUser(user.login)}>{user.login}</button>
                    </li>
                ))}
            </ul>
            {selectedUser && <GithubUser username={selectedUser}/>}
        </div>
    )
}