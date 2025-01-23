import React, { useState } from 'react';

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10**15).toString().padStart(15, '0');
};

const Login = () => {
    const [randomNumber, setRandomNumber] = useState('');

    const handleGenerate = () => {
        setRandomNumber(generateRandomNumber());
    };

    return (
        <div>
            <button onClick={handleGenerate}>Generate Number</button>
            {randomNumber && (
                <div>
                    <p>Random Number: {randomNumber}</p>
                </div>
            )}
        </div>
    )
};