// src/ components/ Quiz.jsx
// this handles the "quiz" logic which includes fetching questions
// from API & managing the current question index

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import FunFact from './FunFact';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showFunFact, setShowFunFact] = useState(false);

    useEffect(() => {
        axios
            .get('https://opentdb.com/api.php?amount=10&category=11&type=multiple')
            .then((response) => {
                const formattedQuestions = response.data.results.map((item) => ({
                    question: item.question,
                    options: [...item.correct_answers, item.correct_answer].sort(() => Math.random() - 0.5),
                    correctAnswer: item.correct_answer,
                }));
                setQuestions(formattedQuestions);
            })
            .catch((error) => console.error('Error fetching trivia questions:', error));
    }, []);

    const handleAnswer = (selectedAnswer) => {
        setShowFunFact(true); // this shows the fun fact 'before' the next question
        setTimeout(() => {
            setShowFunFact(false); // hides the fun fact after a specific delay time
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }, 3000); // Amount of delay time (= 3 seconds)
    };

    return (
        <div>
            {questions.length > 0 && currentQuestionIndex < questions.length ? (
                <>
                    {showFunFact ? (
                        <FunFact />
                    ) : (   // condition ? ( expression-if-true : expression-if-false
                        <Question
                            question={questions[currentQuestionIndex].question}
                            options={questions[currentQuestionIndex].options}
                            handleAnswer={handleAnswer}
                        />
                    )}
                </>
            ) : (
                <p>Quiz Complete! Thanks for playing!</p>
            )}
        </div>
    );
};

export default Quiz;

// ) : ( condition ? expression-if-true : expression-if-false
// conditional operator to conditionally render the FunFact component based on the value of showFunFact.
// if showFunFact is true, the component renders the FunFact component
// otherwise it renders the question component. It works like an if-else statement but more concise.
// "If the condition on the left is true, return the value on the left; otherwise, return
// the value on the right." = So if the questions array is empty or if the current question
// index is equal to the length of the questions array, then show the "Quiz Complete" message.
