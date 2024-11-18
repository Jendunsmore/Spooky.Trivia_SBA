// this is the "Trivia component" where the logic for the quiz goes
// this is NOT the content within the quiz, but rather how the quiz
// will behave.


import React, { useState } from 'react';
import questions from "./questions";

const TriviaGame = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswer = (selectedOption) => {
        const correctAnswer = questions[currentQuestion].answer;
        if (selectedOption === correctAnswer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            alert(`Game over! Your score: ${score}`);
            localStorage.setItem("score", JSON.stringify(score));
        }
    };

    return (
        <div>
            <h1>{questions[currentQuestion].question}</h1>
            {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)}>
                    {option}
                </button>
            ))}
            <p>Score: {score}</p>
        </div>
    );
};

export default TriviaGame;

