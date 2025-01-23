import React, { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('Username: ', username);
        console.log('Password: ', password);
    };
    
    return (
        <div className='App'>
            <header className='App-Header'>
                <img src={logo} className='App-logo' alt="logo" />
                <p>
                    Edit <code>src/App.jsx</code> and save to reload.
                </p>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Username:</label>
                        <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </form>
            </header>
        </div>
    );
};

export default App;