// displays user's final score and "spookiness level"

import React from 'react';

const Score = ({ score }) => {
    const calculateSpookiness = (score) => {
        if (score <= 4) return 'Spooked Amateur';
        else if (score <= 8) return 'Creepy Connoisseur';
        else return 'Halloween Master';
    };

    return (
        <div>
            <h2>Your Final Score: {score}</h2>
            <p>Spookiness Level: {calculateSpookiness(score)}</p>
        </div>
    );
};

export default Score;
