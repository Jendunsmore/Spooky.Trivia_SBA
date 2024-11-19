import React, { useState } from 'react';
import Question from '../components/Question';
import Fact from '../components/Fact';
import GifDisplay from '../components/GifDisplay';
import Score from '../components/Score';

const question = [
    {
        question: "What day is Halloween?",
        options: ["October 30", "October 31", "November 1"],
        answer: "October 31",
    },
    {
        question: "What's the most popular Halloween candy?",
        options: ["Snickers", "Candy Corn", "Reese's"],
        answer: "Reese's",
    },
];
// Add more questions

const facts = [
    "Halloween is the second most commercial holiday after Christmas.",
    "Jack-o'-lanterns originated in Ireland.",
    "The word 'witch' comes from the Old English wicce, meaning 'wise woman.'",
];

export default function GamePage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showFact, setShowFact] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);
        setShowFact(true);
        setTimeout(() => {
            if (currentQuestionIndex + 1 < question.length) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setShowFact(false);
            } else {
                setIsGameOver(true);
            }
        }, 3000); // Show fact for 3 seconds
    };

    return (
        <div className="game-page">
            {isGameOver ? (
                <Score score={score} />
            ) : (
                <>
                    {showFact ? (
                        <>
                            <Fact fact={facts[Math.floor(Math.random() * facts.length)]} />
                            <GifDisplay />
                        </>
                    ) : (
                        <Question
                            question={question[currentQuestionIndex]}
                            onAnswer={handleAnswer}
                        />
                    )}
                </>
            )}
        </div>
    );
}
