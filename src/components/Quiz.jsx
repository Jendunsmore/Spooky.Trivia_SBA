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
        }, 3000); // Amount of delay time
    };




    return (
        <div>
            <h2>Spooky Quiz</h2>
            <p>Get ready to test your Halloween knowledge!</p>
        </div>
    );
};

export default Quiz;
