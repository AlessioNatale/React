import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers(){
    const [data, setData] = useState('');
    const [users, setUsers] = useState([]);

    const handleInput = (event) => {
        setData(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsers(p => [...p, data]);
    }

    return <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={data} onChange={handleInput} />
                <button type="submit">Search User</button>
            </form>
                <ul>
                    {users.map(el => (
                        <li key={el}>
                            <GithubUser username={el} />
                        </li>
                    ))}
                </ul>
            </>
}