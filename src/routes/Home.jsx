import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/game");
    };

    return (
        <div>
            <h1>Hello Suika World!</h1>
            <button type="button" onClick={handleClick}>Play Game</button>
        </div>
    );
}

export default Home;