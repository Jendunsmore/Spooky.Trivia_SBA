// displays trivia question with multiple choice answers.
// keeps track of the user's selection and score

import React from "react";

function Question({ question, onAnswer }) {
    if (!question) {
        return <div>Loading...</div>
    }

    return (
        <div className="question-card">
            <h2>{question.question}</h2> {/* Access question prop here*/}
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
};

export default Question;
