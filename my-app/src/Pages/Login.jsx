import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

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
                <form></form>
            </header>
        </div>
    )
}