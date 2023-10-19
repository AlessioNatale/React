import React, { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
}

function LoginForm() {
  const [username, setUsername] = useFormInput('');
  const [password, setPassword] = useFormInput('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={setUsername} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={setPassword} />
      </div>
      <div>
        <button type="submit">Invia</button>
      </div>
    </form>
  );
}

export default LoginForm;