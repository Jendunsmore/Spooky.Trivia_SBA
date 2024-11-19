// displays trivia question with multiple choice answers.
// keeps track of the user's selection and score

import React from "react";

export default function QuestionCard({ question, onAnswer }) {
    return (
        <div className="question-card">
            <h2>{question.question}</h2>
            {question.options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => onAnswer(option === question.answer)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}
