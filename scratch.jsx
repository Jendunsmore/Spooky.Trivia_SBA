// Requirements for SBA:

// MVP:
// 1. Built with JavaScript, REACT, and VITE
// 2. Frequent Commits to <GitHub></GitHub>
// 3. A README.md file in GitHub repo with:
//      - Explanations of the technologies used
//      - Explanations of the approach taken
//      - A link to your live site (if applicable)
//      - Usage instructions, if relevant
//      - Unsolved mysteries (*problems)
// 4. Use AJAX to make a request to an external data source
// and insert some of the data retrieved into the DOM
// BONUS FEATURES:
// 1. Have one or more complex user interface modules such as
//    a carousel, drag & drop, a sticky nav, tooltips, etc.
// 2. Look into localstorage so to save data to the user's browser.

// Tips to get Started:
// * Wireframe - drawing of what app will look like in all stages
// * Break into diff. components & brainstorm each:
//      Data / Presentation / Views / Style / DOM manipulation
// * Remember to have: Creativity, Code Quality, Problem Solving
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

// Components:
// * App Component:
// - main wrapper & router
// - holds state variables for quiz & data -> child props
// * Quiz Component:
// - Fetches trivia questions via AJAX. manages quiz's state (current question, answers, score)
// - renders Question, Score, & FunFact components
// * Question Component:
// - display single question with answer
// - accepts props for question, answers, and handles user's submission
// * Score Component:
// - shows final score and calculates "spookiness level"
// - determines level by score ranges (?)(0-4, 5-9, etc.)
// * FunFact Component:
// - pops up random Halloween themed fun facts after each question
// - done by storing facts in JSON file in data folder -> loading them

//----------------------------------------------------------------------------------------
// Installation set up:
// new file
// npm vite@latest .
// npm react-router-dom
// npm axios
// npm install i (?)
// npm run dev (to run env. : localhost:5173)
