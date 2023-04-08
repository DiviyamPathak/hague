import React, { useState } from 'react';
function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (  <div>
        <h1> Login </h1>
        <form>
            <label>Email</label>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>

    </div>);
}

export default Login;