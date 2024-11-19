🎃 Halloween Trivia Game 👻
A fun and spooky Halloween-themed trivia game! Test your Halloween knowledge by answering multiple-choice questions, learn random spooky facts, and enjoy Halloween-themed GIFs. Your performance will determine your "Spookiness Level"—are you a Spooky Amateur, Creepy Connoisseur, or a Halloween Master?

🧰 Technologies Used
JavaScript: Core language for building the app.
React: Framework for creating reusable components and managing the UI.
Vite: Lightning-fast development server and build tool.
Giphy API: To fetch and display Halloween-themed GIFs.
CSS: For spooky and responsive styling.

🚀 Approach Taken
Core Features
1. Questions and Answers:
    Users answer Halloween-themed trivia questions.
    Multiple-choice format with immediate feedback.
2. Random Halloween Facts:
    Between each question, a random fact is displayed to keep the experience entertaining.
3. GIF Integration:
    Leveraging the Giphy API to fetch Halloween-related GIFs for a visual treat.
4. Scoring System:
    Score keeps track of correct answers and maps the total to a "Spookiness Level."
5. Spooky Styling:
    Custom fonts, colors, animations, and effects to enhance the Halloween vibe.

Key Implementation Steps
- Component-Based Architecture:
    Modularized features into components (QuestionCard, FactPopup, GifDisplay, and ScoreSummary).
- State Management:
    Used React's useState and useEffect hooks to manage the game flow, API calls, and animations.
- API Integration:
    Made AJAX requests to the Giphy API to dynamically load Halloween-themed GIFs using fetch.
- Game Logic:
    Built a sequential question-answer flow and added random delays for popups and facts.
- Styling:
    Incorporated spooky fonts (Creepster), dark and vibrant Halloween colors, and CSS animations for interactivity.

🕹️ Usage Instructions
1. Clone the repository:
    git clone https://github.com/your-username/halloween-trivia.git
2. Install Dependencies:
    cd halloween-trivia
    npm install
3. Start the development server:
    npm run dev
4. Open the app in your browser: http://localhost:5173

Playing the Game
   - Answer the trivia questions by selecting the correct option.
   - Enjoy a random Halloween fact after each question.
   - Watch spooky Halloween GIFs between questions.
   - View your "Spookiness Level" at the end of the game.

🎯 Features in Action
Random Fact Popup:
   - A spooky fact (e.g., "Jack-o'-lanterns originated in Ireland!") appears between questions.
GIF Integration:
   - Fetches GIFs dynamically from the Giphy API.
   - Only Halloween-related GIFs are displayed.
Scoring and Levels:
    ~ 0-4 correct answers: Spooky Amateur
    ~ 5-8 correct answers: Creepy Connoisseur
    ~ 9+ correct answers: Halloween Master

🧩 Unsolved Mysteries
   1. GIF Loading Lag:
      - Some GIFs take longer to load. Investigating potential caching or preloading solutions.
   2. Edge Cases:
      - What happens if the Giphy API fails? Currently, the app shows a loading message indefinitely.

📂 File Structure
halloween-trivia/
├── public/
│   └── index.html
├── src/
│   ├── assets/          # Spooky styling assets (CSS, images, fonts)
│   ├── components/      # Reusable UI components
│   │   ├── QuestionCard.jsx
│   │   ├── FactPopup.jsx
│   │   ├── GifDisplay.jsx
│   │   └── ScoreSummary.jsx
│   ├── pages/           # Main app pages
│   │   └── GamePage.jsx
│   ├── App.jsx          # Main app entry
│   ├── index.css        # Global styles
│   └── main.jsx         # ReactDOM rendering
├── package.json
├── README.md
└── vite.config.js

📝 Future Enhancements
1. Improved GIF Handling:
    Add a fallback image in case of API failure.
2. Multiplayer Mode:
    Allow multiple users to compete for the best spookiness level.
3. Leaderboard:
    Track and display high scores for bragging rights.
4. Sound Effects:
    Add eerie sound effects for button clicks and transitions.
