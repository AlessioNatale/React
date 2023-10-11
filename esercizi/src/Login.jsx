import { useState } from "react";

function createData() {
    return {
        username: "",
        password: "",
        session: false
    };
}

export function Login() {
    const [data, setData] = useState(createData());

    function handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;

        setData((prevData) => {
            return {
                ...prevData,
                [name]: event.target.type === "checkbox" ? checked : value
            };
        });
    }

    function onLogin(){
        alert("Login")
    }

    function resetForm(){
        return setData(createData())
    }

    return (
        <div>
            <input name="username" value={data.username} onChange={handleInputChange} />
            <input name="password" value={data.password} onChange={handleInputChange} />
            <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange} />
            <button disabled={!data.username || ! data.password} onClick={onLogin}>Login</button>
            <button onClick={resetForm}>Reset</button>
        </div>
    );
}
