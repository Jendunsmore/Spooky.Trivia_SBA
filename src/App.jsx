// Main component!!

import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Question from './components/Question';
import Score from './components/Score';

const App = () => {
  const [showQuiz, setShowQuiz] = useState(true);
  const [score, setScore] = useState(0);

  return (
    <div>
      <h1>Welcome to the Spooky Trivia App</h1>
      {showQuiz ? (
        <Quiz />
      ) : (
        <Score score={score} />
      )}
    </div>
  );
};

export default App;
