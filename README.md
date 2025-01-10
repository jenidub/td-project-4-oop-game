# Phrase Hunter
Phrase Hunter is a browser-based word-guessing game where players attempt to uncover a hidden phrase by guessing letters. The game ends when the player either reveals the entire phrase or makes five incorrect guesses.

## Features

- Randomly selected phrases for each new game.
- Interactive on-screen keyboard for guessing letters.
- Visual feedback for correct and incorrect guesses.
- Lives system: Lose a heart for each incorrect guess.
- Win or lose messages displayed at the end of the game.

## How to Play

1. Click the "Start Game" button to begin.
2. A random phrase will be selected and displayed as blank spaces (underscores) for each letter and spaces for each word.
3. Use the on-screen keyboard to guess letters one at a time.
   - Correct guesses reveal the matching letters in the phrase.
   - Incorrect guesses mark the letter and remove one heart.
4. Win by guessing all the letters in the phrase before running out of hearts.
5. Lose if you make five incorrect guesses.

## Code Overview

The project is structured into three main gameplay Javascript files:

### 1. `app.js`
Handles user interactions and ties the game mechanics together:
- Creates a new game instance when the "Start Game" button is clicked.
- Resets the game board, including the keyboard and hearts, before starting a new game.
- Adds event listeners to handle button clicks for guessing letters.

### 2. `Game.js`
Manages the game's logic:
- Stores phrases and selects a random one for each new game.
- Tracks the number of missed guesses and updates the player's lives.
- Checks for win/loss conditions and displays appropriate messages.
- Handles user input (guesses) and determines whether they are correct or incorrect.

### 3. `Phrase.js`
Handles the display and interaction with the phrase:
- Builds and displays the phrase dynamically in the game area.
- Checks if a guessed letter is part of the phrase.
- Reveals matching letters in the phrase when guessed correctly.

## Project Requirements
- A modern browser with JavaScript enabled.
- An internet connection to load the game's assets.

## How to Run
1. Clone the repository to your local machine.
2. Open the `index.html` file in your browser.
3. Click "Start Game" and enjoy!

## Future Enhancements
- Add additional phrases to the phrase library.
- Implement a timer or scoring system.
- Allow for dynamic resizing for mobile devices.
- Add sound effects and animations for more interactivity.
- Allow users to guess using their physical keyboards

## Credits
This project is part of the Treehouse Fullstack JavaScript Techdegree program.
