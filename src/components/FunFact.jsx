// - Randomly selects & displays a fact from the (funFacts) array (data/funFacts)
// when rendered.
// - When user answers a question, (showFunFact) state is set to true triggering
// the (FunFact) component to render.
// - After a delay (setTimeOut) the next question is shown & (showFunFact) is reset
// to false.

import React, { useEffect, useState } from 'react';
// import funFacts from '../data/funFacts';

const FunFact = () => {
    const [fact, setFact] = useState("");

    useEffect(() => {
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        setFact(randomFact);
    }, []);

    return <p>Fun Fact: {fact}</p>
};

export default FunFact;
